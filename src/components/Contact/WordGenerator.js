import React, { useState, useEffect, useRef } from 'react';

let messages = [
  'the bees knees',
  'a spicy taco',
  'the prime meridian',
  'a good time at the movies',
  'your best nightmare',
  'the space between dream and reality',
  'a solution to climate change',
  'the neighbours golden retriever',
  'a long walk on the beach',
  'random thoughts of mine',
  'your favourite deli',
  'an internet argument',
  'fantastical delirium',
  'random thoughts of yours',
  'an infinite loop',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const WordGenerator = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 100; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      newIdx = 0;
      messages = messages
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }

    updateMessage(messages[newIdx].slice(0, newChar));
    updateIter(newIdx);
    updateChar(newChar + 1);
  }, isActive ? delay : null);

  return (
    <span
      className="inline-container"
      style={{}}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <span>{message}</span>
    </span>
  );
};

export default WordGenerator;
