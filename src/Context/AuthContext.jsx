/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem("user")) || null;
  });
  const [userId, setUserId] = useState(() => {
    return JSON.parse(sessionStorage.getItem("userId")) || null;
  });
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }

    if (userId) {
      sessionStorage.setItem("userId", JSON.stringify(userId));
    } else {
      sessionStorage.removeItem("userId");
    }
  }, [user, userId]);

  const register = async (email, username, password, phone) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        email,
        username,
        password,
        phone,
      });
      setUser(response.data.data);
      setUserId(response.data.data.id);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setUser(response.data.token);
        setUserId(response.data.data);
        console.log("User ID after login:", response.data.data); // Log the user ID after login
        if (response.data.data) {
          await fetchReviews(response.data.data); 
        } else {
          console.error("No userId found after login.");
        }
        return response.data;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async (reviewerId) => {
    setLoading(true);
    try {
      if (!reviewerId) {
        console.error("Reviewer ID is null or undefined."); // Log if reviewerId is missing
        return;
      }

      console.log("Fetching reviews for reviewer ID:", reviewerId); // Log before fetching reviews
      const response = await axios.get(`http://localhost:3000/api/reviewer/reviewerReviews/${reviewerId.reviewerId}`);
      console.log("Reviews fetched:", response.data); // Log the fetched reviews
      setReviews(Array.isArray(response.data.data) ? response.data.data : []); // Ensure reviews is an array
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setUserId(null);
    setReviews([]);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ user, userId, loading, reviews, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
