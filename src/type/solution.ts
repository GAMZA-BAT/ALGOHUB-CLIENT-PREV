export interface SolutionDataType {
  codeLength: number;
  content: string;
  executionTime: number;
  isCorrect: boolean;
  language: string;
  memoryUsage: number;
  nickname: string;
  profileImage: string;
  solutionId: number;
  solvedDateTime: string;
  commentCount: number;
}

export interface CommentDataType {
  commentId: number;
  writerNickname: string;
  writerProfileImage: string;
  content: string;
  createdAt: string;
}