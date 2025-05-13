
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/sonner';

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  options?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}

const questions: Question[] = [
  { 
    id: 1, 
    question: "Berapa hasil dari 2 + 4?", 
    correctAnswer: "6", 
    difficulty: 'easy' 
  },
  { 
    id: 2, 
    question: "Berapa hasil dari 5 × 3?", 
    correctAnswer: "15", 
    difficulty: 'easy' 
  },
  { 
    id: 3, 
    question: "Berapa hasil dari 20 - 7?", 
    correctAnswer: "13", 
    difficulty: 'easy' 
  },
  { 
    id: 4, 
    question: "Berapa hasil dari 18 ÷ 3?", 
    correctAnswer: "6", 
    difficulty: 'medium' 
  },
  { 
    id: 5, 
    question: "Berapa hasil dari 4 × 6 + 2?", 
    correctAnswer: "26", 
    difficulty: 'medium' 
  },
];

const MathQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | "">("");
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const checkAnswer = () => {
    if (!answer.trim()) {
      toast("Mohon masukkan jawaban terlebih dahulu", {
        description: "Kamu belum memasukkan jawaban apapun",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate a small delay for checking answer
    setTimeout(() => {
      const isCorrect = answer.trim() === currentQuestion.correctAnswer;
      
      if (isCorrect) {
        setFeedback("correct");
        setScore(prevScore => prevScore + 10);
        toast.success("Jawaban Benar! 🎉", {
          description: "Kamu mendapatkan 10 poin!",
        });
      } else {
        setFeedback("incorrect");
        toast.error("Jawaban Salah! ❌", {
          description: `Jawaban yang benar adalah ${currentQuestion.correctAnswer}`,
        });
      }
      
      setIsSubmitting(false);
    }, 500);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setAnswer("");
      setFeedback("");
    } else {
      toast.success("Quiz Selesai! 🎉", {
        description: `Skor akhirmu: ${score + (feedback === "correct" ? 10 : 0)}`,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card className={`shadow-lg border-2 ${
        feedback === "correct" ? "border-mathapp-green" : 
        feedback === "incorrect" ? "border-mathapp-red" : 
        "border-mathapp-blue"
      } ${
        feedback === "correct" ? "success-animation" : 
        feedback === "incorrect" ? "error-animation" : ""
      }`}>
        <CardHeader className="bg-gradient-to-r from-mathapp-blue to-mathapp-purple rounded-t-lg text-white">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Latihan Matematika SD</CardTitle>
            <div className="bg-white text-mathapp-blue px-3 py-1 rounded-full font-bold">
              Skor: {score}
            </div>
          </div>
          <CardDescription className="text-white/90">
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="mb-6">
            <p className="text-xl font-medium mb-2">{currentQuestion.question}</p>
            {currentQuestion.imageUrl && (
              <img 
                src={currentQuestion.imageUrl} 
                alt="Question illustration" 
                className="my-4 rounded-md max-h-40 mx-auto"
              />
            )}
          </div>
          
          <div className="flex gap-4">
            <Input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Ketik jawaban di sini..."
              className="text-lg p-6 border-2 border-mathapp-blue/30 focus:border-mathapp-blue"
              disabled={feedback !== ""}
            />
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          {feedback === "" ? (
            <Button 
              className="bg-mathapp-blue hover:bg-mathapp-blue/90 text-white w-full text-lg py-6"
              onClick={checkAnswer}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Memeriksa..." : "Cek Jawaban"}
            </Button>
          ) : (
            <Button 
              className="bg-mathapp-green hover:bg-mathapp-green/90 text-white w-full text-lg py-6"
              onClick={nextQuestion}
            >
              {currentQuestionIndex < questions.length - 1 ? "Soal Berikutnya" : "Selesai"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default MathQuiz;
