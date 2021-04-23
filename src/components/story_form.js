// import React, { useState } from "react";
// import { UserContext } from "../context/user_context";

// export const StoryForm = (props) => {
//   const [userStories, setUserStories] = useState([]);

//   return (
//     <Form
//       style={{ maxWidth: 300 }}
//       className="mt-3"
//       onSubmit={isSignup ? handleSignup : handleLogin}
//     >
//       {apiError && <p className="text-danger">{apiError}</p>}
//       <Form.Group controlId="username">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Username"
//           value={usernameField}
//           onChange={(event) => setUsernameField(event.target.value)}
//           disabled={isSubmitting}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="password">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={passwordField}
//           onChange={(event) => setPasswordField(event.target.value)}
//           disabled={isSubmitting}
//           required
//         />
//       </Form.Group>
//       {isSignup && (
//         <Form.Group controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             value={nameField}
//             onChange={(event) => setNameField(event.target.value)}
//             disabled={isSubmitting}
//             required
//           />
//         </Form.Group>
//       )}
//       <Button variant="primary" type="submit" disabled={isSubmitting}>
//         {title}
//       </Button>
//       <p className="text-muted">
//         Need to {isSignup ? "Login" : "Sign up"}?{" "}
//         <Button
//           variant="link"
//           onClick={handleLogin}
//           size="sm"
//           className="px-0 pb-1"
//           disabled={isSubmitting}
//         >
//           click here
//         </Button>
//       </p>
//     </Form>
//   );
// };
