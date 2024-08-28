import React from 'react';
import {BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ForgotPassword from "./pages/forgotpassword.js"
import Register from "./pages/register.js";
import Verification from "./pages/verification.js";
import Summary from "./pages/summary.js";
import Choice from "./pages/choice.js";
import QuizTopics from "./pages/quiztopics.js";
import QuizPlaces from "./pages/quizplaces.js";
import LearnTopics from "./pages/learntopics.js";
import LearnPlaces from "./pages/learn/learnplaces.js";
import LearnPenang from "./pages/learn/learnpenang.js";
import LearnPerlis from "./pages/learn/learnperlis.js";
import LearnSarawak from "./pages/learn/learnsarawak.js";
import LearnFood from "./pages/learn/learnfood.js";
import LearnClothes from "./pages/learn/learnclothes.js";
import Menu from "./pages/menu.js";
import Profile from "./pages/profile.js";
import Error from "./pages/error.js";
import {Button, Container} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Leaderboard from "./pages/leaderboard.js";
import QuizPage from "./pages/quiz/quizpage.js";

function BackButton() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Button
            onClick={handleBack}
            variant="contained"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '8px 16px',
            }}
        >
            <ArrowBackIcon style={{ color: '#ffffff' }} />
        </Button>
    );
}

function App() {
    const location = useLocation();
    const showBackButton = !['/', '/home', '/menu', '/quiz/food', '/quiz/clothes', '/quiz/places/penang', '/quiz/places/perlis'].includes(location.pathname);
    return (
        <Container>
            {showBackButton && <BackButton />}
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="forgotPassword" element={<ForgotPassword/>}/>
                        <Route path="verification" element={<Verification/>}/>
                        <Route path="menu" element={<Menu/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="choice" element={<Choice/>}/>
                        <Route path="summary" element={<Summary/>}/>
                        <Route path="learn" element={<LearnTopics/>}/>
                        <Route path="quiz" element={<QuizTopics/>}/>
                        <Route path="learnplaces" element={<LearnPlaces/>}/>
                        <Route path="learnpenang" element={<LearnPenang/>}/>
                        <Route path="learnperlis" element={<LearnPerlis/>}/>
                        <Route path="learnsarawak" element={<LearnSarawak/>}/>
                        <Route path="quiz/places" element={<QuizPlaces/>}/>
                        <Route path="learnfood" element={<LearnFood/>}/>
                        <Route path="learnclothes" element={<LearnClothes/>}/>
                        <Route path="*" element={<Error/>}/>
                        <Route path="leaderboard" element={<Leaderboard/>}/>
                        <Route path="quizpage" element={<QuizPage/>}/>
                        <Route path="/quiz/food" element={<QuizPage topic="food" />} />
                        <Route path="/quiz/clothes" element={<QuizPage topic="clothes" />} />
                        <Route path="/quiz/places/penang" element={<QuizPage topic="penang" />} />
                        <Route path="/quiz/places/perlis" element={<QuizPage topic="perlis" />} />
                        <Route path="/quiz/places/sarawak" element={<QuizPage topic="sarawak" />} />
                    </Route>
                </Routes>
        </Container>
    );
}

export default App;