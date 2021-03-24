import {useState} from "react";
import styles from "./image-picker.module.scss"
import Button from "@atlaskit/button";

type Image = { url: string };

const ImagePicker = <T extends Image>({onSelect, images}: { onSelect: (image: T) => void, images: (T)[] }) => {
  const [selected, setSelected] = useState<T>()

  return <div className={styles.container}>
    <header>
      <h1>Choose an image:</h1>
      <Button appearance="primary" disabled={!selected} onClick={selected ? () => {
        onSelect(selected)
      } : () => {
      }}>Choose</Button>
    </header>
    <main>
      {images.map(image =>
        <img
          className={`${styles.image} ${selected === image ? styles.selected : ""}`}
          onClick={() => {
            selected === image ? onSelect(selected) : setSelected(image)
          }}
          src={image.url}
          alt={"Image"}
          width={1}
          height={1}
        />
      )}
    </main>

  </div>
}

export default ImagePicker