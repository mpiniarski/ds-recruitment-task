import { useState } from 'react';
import Button from '@atlaskit/button';
import styles from './image-picker.module.scss';

type Image = { url: string };

const ImagePicker = <T extends Image>({ onSelect, images }: { onSelect: (image: T) => void, images: (T)[] }) => {
  const [selected, setSelected] = useState<T>();

  return (
    <div className={styles.container} data-test={"ImagePicker"}>
      <header>
        <h1>Choose an image:</h1>
        <Button
          appearance="primary"
          isDisabled={selected === undefined}
          onClick={selected ? () => {
            onSelect(selected);
          } : () => {
          }}
          data-test={"Button-submit"}
        >
          Choose
        </Button>
      </header>
      <main data-test={"images"}>
        {images.map((image, key) => (
          <img
            key={key}
            className={`${styles.image} ${selected === image ? styles.selected : ''}`}
            onClick={() => {
              selected === image ? onSelect(selected) : setSelected(image);
            }}
            src={image.url}
            alt="Image"
            width={1}
            height={1}
          />
        ))}
      </main>

    </div>
  );
};

export default ImagePicker;
