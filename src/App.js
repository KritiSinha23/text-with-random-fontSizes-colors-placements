import "./styles.css";

const data = [
  { x: "Mandarin chinese", value: 1090000000, category: "Sino-Tibetan" },
  { x: "English", value: 983000000, category: "Indo-European" },
  { x: "Hindustani", value: 544000000, category: "Indo-European" },
  { x: "Spanish", value: 527000000, category: "Indo-European" },
  { x: "Arabic", value: 422000000, category: "Afro-Asiatic" },
  { x: "Malay", value: 281000000, category: "Austronesian" },
  { x: "Russian", value: 267000000, category: "Indo-European" },
  { x: "Bengali", value: 261000000, category: "Indo-European" },
  { x: "Portuguese", value: 229000000, category: "Indo-European" },
  { x: "French", value: 229000000, category: "Indo-European" },
  { x: "Hausa", value: 150000000, category: "Afro-Asiatic" },
  { x: "Punjabi", value: 148000000, category: "Indo-European" },
  { x: "Japanese", value: 129000000, category: "Japonic" },
  { x: "German", value: 129000000, category: "Indo-European" },
  { x: "Persian", value: 121000000, category: "Indo-European" }
];

export default function App() {
  return (
    <div
      className="App"
      style={{ position: "relative", width: "400px", margin: "0 auto" }}
    >
      {data.map((item, index) => {
        let rotateVal = `rotate(${Math.floor(Math.random() * 99)}deg)`;
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: Math.random() * 400 + "px",
              left: Math.random() * 400 + "px"
            }}
          >
            <p
              style={{
                fontSize: item.fontSize,
                color: item.fontColor,
                transform: rotateVal
              }}
            >
              {item.x}
            </p>
          </div>
        );
      })}
    </div>
  );
}

const colorMapping = {};
const sortedData = data.sort((a, b) => a.value - b.value);

const getTextSize = (index) => {
  let initialSize = 1;
  return initialSize + index + 10 + "px";
};

const getCategoryColor = (category) => {
  if (colorMapping[category]) {
    return colorMapping[category];
  } else {
    colorMapping[category] =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    return colorMapping[category];
  }
};

sortedData.forEach((item, index) => {
  item.fontSize = getTextSize(index);
  item.fontColor = getCategoryColor(item.category);
});
