import { ReactElement, useState } from "react";
import PostCard from "./postCard/PostCard";

interface Props {}

export default function Dashboard({}: Props): ReactElement {
  const [dummyPostData, setDummyPostData] = useState([
    {
      _id: "61ef08b4b06a1addfba67884h",
      title: "W",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [],
      user: {
        _id: "61ef047bb06a1addfba632de",
        displayName: "tester111",
        username: "tester111",
      },
      comments: [],
      likes: [],
      createdAt: "2022-01-24T20:14:44.170Z",
      __v: 0,
    },
    {
      _id: "61ef08b4b06a1addfba632e7",
      title: "short title",
      description: "hello description here",
      tags: [],
      user: {
        _id: "61ef047bb06a1addfba632de",
        displayName: "tester111",
        username: "tester111",
      },
      comments: [],
      likes: [],
      createdAt: "2022-01-24T20:14:44.170Z",
      __v: 0,
    },
    {
      _id: "61ef08b4b06a1addfba6753d",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Pharetra vel turpis nunc eget lorem dolor. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Purus in mollis nunc sed. Dignissim convallis aenean et tortor at risus viverra. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Velit egestas dui id ornare. Metus aliquam eleifend mi in nulla posuere sollicitudin. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ac felis donec et odio pellentesque diam. Penatibus et magnis dis parturient. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Id velit ut tortor pretium viverra suspendisse. Pretium nibh ipsum consequat nisl vel pretium. Ac tortor dignissim convallis aenean et. Enim eu turpis egestas pretium aenean pharetra. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Sociis natoque penatibus et magnis. Id velit ut tortor pretium viverra suspendisse potenti. Commodo odio aenean sed adipiscing diam donec. Purus in mollis nunc sed id semper. At volutpat diam ut venenatis tellus in metus vulputate eu. A diam maecenas sed enim. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Nisi est sit amet facilisis magna etiam tempor orci eu. Non pulvinar neque laoreet suspendisse interdum consectetur. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Turpis egestas integer eget aliquet nibh praesent. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam ut venenatis tellus in metus vulputate. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. At tempor commodo ullamcorper a lacus vestibulum. Facilisis sed odio morbi quis commodo odio. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ut tortor pretium viverra suspendisse. Netus et malesuada fames ac turpis egestas.",
      tags: [],
      user: {
        _id: "61ef047bb06a1addfba632de",
        displayName: "tester111",
        username: "tester111",
      },
      comments: [],
      likes: [],
      createdAt: "2022-01-24T20:14:44.170Z",
      __v: 0,
    },
  ]);
  return (
    <div style={{ background: "grey" }}>
      <p>Dashboard</p>

      {dummyPostData.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
