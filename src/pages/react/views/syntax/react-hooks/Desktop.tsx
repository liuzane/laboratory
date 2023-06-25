// 基础模块
import React, { useState, useEffect, useRef } from 'react';

// 布局组件
import { LayContent } from '@-react/layouts/LayMain';

const Desktop: React.FC = () => {
  const [ imString, setImString ] = useState<string>('');
  const [ imNumber, setImNumber ] = useState<number>(0);
  const [ imBoolean, setImBoolean ] = useState<boolean>(false);

  const [ count, setCount ] = useState<number>(0);

  const theListDom = useRef<any>(null);

  useEffect(() => {
    // console.log('Mounted');
    // console.log('theListDom:', theListDom);
    return () => {
      // console.log('Mounted destoryed');
    };
  }, []);

  useEffect(() => {
    // console.log('Updated');
    return () => {
      // console.log('Updated destoryed');
    };
  });

  useEffect(() => {
    // console.log('Updated by count:' + count);
    return () => {
      // console.log('Updated by count destoryed');
    };
  }, [ count ]);

  const handleCount = (isAdd: boolean): void => {
    setCount(count + (isAdd ? 1 : -1));
  };

  return (
    <LayContent>
      <h3>basic-types:</h3>
      <ul ref={theListDom}>
        <li>string: { typeof imString }</li>
        <li>number: { typeof imNumber }</li>
        <li>boolean: { typeof imBoolean }</li>
        <li>Current count number: { count }</li>
      </ul>
      <button onClick={ handleCount.bind(this, true) }>Add</button>
      <button onClick={ handleCount.bind(this, false) }>Minus</button>
    </LayContent>
  );
};

export default Desktop;