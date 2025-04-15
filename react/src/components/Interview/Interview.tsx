import { useState, useEffect } from 'react';

function CustomInput(props) {
  const { value, defaultValue, maxLength, onChange, ...rest } = props;
  const [currentValue, setCurrentValue] = useState(defaultValue ?? value);
  const [currentValueLength, setCurrentValueLength] = useState(currentValue.length);
  const change = (e) => {
    const targetValue = e.target.value;
    const targetValueLength = targetValue.length;
    if (targetValueLength <= maxLength) {
      setCurrentValue(targetValue);
      setCurrentValueLength(targetValue.length);
      onChange && onChange(targetValue, e);
    }
  }
  return (
    <div className="custom-input">
      <input value={currentValue} className="custom-input__inner" onChange={change} {...rest} />
      <span className="custom-input__length">{ currentValueLength } / { maxLength }</span>
    </div>
  );
}

function Loading() {
  return <button disabled>loading...</button>
}

function Button(props) {
  return <button {...props}>按钮</button>
}

function TimeoutButton() {
  // 你的代码
  let [loading, setLoading] = useState(true);
  let timeout = null;
  const resetTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  useEffect(() => {
    resetTimeout();
  }, []);
  const onClick = () => {
    setLoading(true);
    resetTimeout();
  }
  return loading ? <Loading /> : <>
    <span>Success</span>
    <Button onClick={onClick} />
  </>;
}

export function Interview() {
  return (
    <div>
      <TimeoutButton />
      {/* 用户可正常进行输入框值的变更 */}
      <CustomInput maxLength={10} defaultValue="hello" placeholder="123" />
      {/* 因未传入 onchange 处理函数，用户无法进行输入框值的变更 */}
      <CustomInput maxLength={10} value="hello" />
    </div>
  );
}