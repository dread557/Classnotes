export const fetchLessons = async (context: {
  queryKey: string[];
}): Promise<any> => {
  const subjectId = context.queryKey[1];
  const response = await fetch(
    `https://api-test-f4ae.up.railway.app/v1/lessons/bysubject/${subjectId}`
  );
  return response.json();
};
