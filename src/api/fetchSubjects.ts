export const fetchSubjects = async (context: {
  queryKey: string[];
}): Promise<any> => {
  const groupId = context.queryKey[1];
  const response = await fetch(
    `https://api-test-f4ae.up.railway.app/v1/subjects/bygroupId/${groupId}`
  );
  return response.json();
};
