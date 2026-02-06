const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTriviaQuestions = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple",
      );

      if (res.status === 429) {
        // Rate limited, wait before retry
        await delay(2000 * (i + 1));
        continue;
      }

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const data = await res.json();
      return data.results || [];
    } catch (error) {
      if (i === retries - 1) {
        console.error("Failed to fetch questions:", error);
        return [];
      }
      await delay(1000);
    }
  }
  return [];
};
