import { ReactElement, useState, useEffect } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Container,
  Typography,
  CircularProgress,
  Divider,
  Paper,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import { useCreatePostMutation } from "../store/apiSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postField } from "../types/types";

const postSchema = yup.object({
  title: yup.string().required("* Required Field"),
  description: yup.string().required("* Required Field"),
});

export default function PostForm(): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [createPost, { isLoading }] = useCreatePostMutation();
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<postField>({
    resolver: yupResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      image: {},
    },
  });
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<postField> = async (postData) => {
    await createPost(postData);
    await handleClose();
  };

  useEffect(() => {
    const subscription = watch((postData: any) => {
      if (postData.image && 0 in postData.image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(postData.image[0]);
      } else {
        setPreview(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        size="large"
        onClick={handleOpen}
        sx={{
          borderRadius: { xs: "0", sm: "5px" },
        }}
      >
        Create Post
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            width: "600px",
            p: "1rem",
            boxSizing: "content-box",
          }}
        >
          <Typography variant="h5">Create a Post</Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            maxWidth="md"
            sx={{ gap: "2rem", display: "flex", flexDirection: "column" }}
          >
            <Divider />
            <TextField
              variant="outlined"
              label="Title"
              autoComplete="off"
              {...register("title")}
              error={errors.title && true}
              helperText={errors.title?.message}
            />
            <TextField
              multiline
              rows={3}
              variant="outlined"
              label="Description"
              autoComplete="off"
              {...register("description")}
              error={errors.description && true}
              helperText={errors.description?.message}
            />

            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "1rem",
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="upload preview"
                  style={{
                    objectFit: "contain",
                    maxWidth: "600px",
                    maxHeight: "200px",
                  }}
                />
              ) : (
                <Typography>Image Preview</Typography>
              )}
            </Container>

            <label htmlFor="upload-img-button">
              <input
                accept="image/*"
                id="upload-img-button"
                type="file"
                style={{ display: "none" }}
                {...register("image")}
              />

              {preview === null && (
                <Button
                  component="span"
                  fullWidth
                  variant="contained"
                  size="large"
                  endIcon={<AddAPhotoIcon />}
                >
                  Upload
                </Button>
              )}
            </label>
            {preview && (
              <Button
                component="span"
                fullWidth
                variant="outlined"
                size="large"
                endIcon={<NoPhotographyIcon />}
                onClick={() => setValue("image", {})}
              >
                Delete
              </Button>
            )}

            <Box sx={{ position: "relative" }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={isLoading}
              >
                Submit Post
              </Button>
              {isLoading && (
                <CircularProgress
                  size={30}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  );
}
