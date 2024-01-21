import React, { useEffect, useState } from "react";
// import "./Comment.modual.scss";
// import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import axiosClient from "../../components/axiosClient/axiosClient";

// const CommentForm = ({ addComment }) => {
//   const userId = JSON.parse(localStorage.getItem("customer")).userId;
//   const [content, setContent] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Kiểm tra xem có nội dung và tác giả không rỗng
//     if (!content) return;
//     // Gửi dữ liệu comment mới lên phần cha thông qua prop
//     addComment({ content });

//     // Reset form fields sau khi gửi comment
//     setContent("");
//   };

//   return (
//     <div className="w-100">
//       <div className="mb-5">
//         <Form>
//           <Row className="flex flex-wrap md:flex-nowrap w-full items-start h-full justify-between my-2">
//             <Col md={7} className="w-full h-full mb-3 md:mb-0">
//               <Form.Group className="mantine-InputWrapper-root mantine-Textarea-root mantine-1m3pqry">
//                 <Form.Control
//                   as="textarea"
//                   className="rounded-lg border-neutral-300 mantine-Input-input mantine-Textarea-input mantine-1jx8v2y"
//                   id="mantine-r8"
//                   placeholder="Nhận xét về sản phẩm"
//                   rows="6"
//                   value={content.content}
//                   onChange={(e) => setContent({userId:userId,content:e.target.value})}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={5} className="w-full flex flex-col md:px-2">
//               <button
//                 type="COMMENT"
//                 variant="primary"
//                 onClick={handleSubmit}
//                 className="reply submitcomment mantine-UnstyledButton-root mantine-Button-root bg-ddv hover:bg-ddv text-white rounded-lg cursor-pointer mt-2 mantine-ijj40k"
//                 style={{ width: "100%", height: "44px" }}
//               >
//                 Gửi
//               </button>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//     </div>
//   );
// };

// const Comment = ({ comment, addReply }) => {
//   const userId = JSON.parse(localStorage.getItem("customer")).userId;

//   const [replyContent, setReplyContent] = useState({});

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     if (!replyContent) return;

//     // Gửi dữ liệu reply lên component cha thông qua prop
//     addReply(comment.id, replyContent);

//     // Reset form field sau khi gửi reply
//     setReplyContent("");
//   };

//   return (
//     <div className="comment">
//       <div className="d-flex">
//         <div className="avatar overflow-hidden">
//           <img
//             alt="1"
//             src="https://didongviet.vn/images/pc/defaultavatar.png"
//           />
//         </div>
//         <div>
//           <p>{userId}</p>
//           <p>{comment.content}</p>
//           <form onSubmit={handleSubmitReply}>
//             <input
//               type="text"
//               placeholder="Reply..."
//               value={replyContent}
//               onChange={(e) => setReplyContent({userId:userId,content:e.target.value})}
//             />
//             <button type="submitcomment submit">Reply</button>
//           </form>
//           {/* Hiển thị các reply nếu có */}
//           {comment.replies &&
//             comment.replies.map((reply, index) => (
//               <div key={index} className="reply" style={{ marginLeft: "2%" }}>
//                 <div className="d-flex">
//                   <div className="avatar overflow-hidden">
//                     <img
//                       alt="1"
//                       src="https://didongviet.vn/images/pc/defaultavatar.png"
//                     />
//                   </div>
//                   <div>
//                     <p>Posted by: {reply.author}</p>
//                     <p>{reply.content}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CommentList = () => {
//   const [comments, setComments] = useState([]);

//   const dispatch=useDispatch();

//   useEffect(()=>{
//     axiosClient.get('Comments').then(res=>setComments(res.data))
//   },[])

//   const addComment = (newComment) => {
//     // Post new comment to the API
//     dispatch(addComment(newComment))
//   };

//   const addReply = (parentId, replyContent) => {
//     // Tìm comment cha cần reply
//     const commentToReply = comments.find((comment) => comment.id === parentId);

//     if (commentToReply) {
//       // Thêm reply vào comment cha
//       commentToReply.replies.push({
//         id: commentToReply.replies.length + 1,
//         author: "Anonymous", // Bạn có thể thay đổi cách lấy tác giả
//         content: replyContent,
//       });

//       // Cập nhật danh sách comments
//       setComments([...comments]);
//     }
//   };

//   return (
//     <div>
//       <CommentForm addComment={addComment} />
//       <div className="comment-list">
//         {comments.map((comment, index) => (
//           <Comment key={index} comment={comment} addReply={addReply} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentList;
import { Form, Button } from "react-bootstrap";
import axiosClient from "../../components/axiosClient/axiosClient";
import { addComment, getComments } from "../../features/user/userSlice";

const CommentForm = ({ phoneId }) => {
  const userId = JSON.parse(localStorage.getItem("customer")).userId;
  // const comment=
  const [content, setContent] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) return;

    try {
      // Assuming your API endpoint for posting comments is /api/comments
      dispatch(addComment(content));
      setTimeout(() => {
        dispatch(getComments());
      }, 300);

      // Reset nội dung sau khi thêm bình luận thành công
      setContent("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentForm">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Add a comment..."
          value={content.content}
          onChange={(e) =>
            setContent({
              userId: userId,
              content: e.target.value,
              phoneId: phoneId,
            })
          }
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        Add Comment
      </Button>
      <CommentList phoneId={phoneId} />
    </Form>
  );
};

const CommentList = ({phoneId}) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state?.auth?.getComments);
  console.log(comments);

  useEffect(() => {
    // Gọi action để lấy danh sách bình luận từ Redux
    dispatch(getComments());
  }, []);

  return (
    <div>
      {comments?.map((comment) => {
        if (comment.phoneId === phoneId) {
          return <Comment key={comment.id} comment={comment} />;
        }
      })}
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <div>
      <p>UserId: {comment.userId}</p>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentForm;
