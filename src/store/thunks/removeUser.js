import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    // JSON Server 在 delete 成功之後會回傳空物件
    // 所以此處要回傳 user 給 reducer 繼續做使用
    return user;
});

export { removeUser };