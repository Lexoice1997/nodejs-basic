export const parseEnv = () => {
  const rssVariables = Object.entries(process.argv).reduce(
    (acc, [key, value]) => {
      if (key.startsWith("RSS_")) {
        acc.push(`${key}=${value}`);
      }
      return acc;
    },
    []
  ); 

  rssVariables.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
};

parseEnv();
