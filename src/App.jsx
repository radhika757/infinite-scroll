import { useEffect, useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      // ht of users browser window + vertical scroll position of doc
      if (
        window.innerHeight + window.scrollY >=
        // total ht of doc body
        window.document.body.offsetHeight
      ) {
        setCount(count + 50);
      }
    };

    // Add event listener to scroll
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  const elements = [];
 
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }

  return (
    <>
      <div>{elements}</div>
    </>
  );
}

export default App;
