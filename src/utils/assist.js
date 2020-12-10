// 验证数据类型
export function typeOf (obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };

  return map[ toString.call(obj) ];
}

// 深拷贝
export function deepCopy (data) {
  const type = typeOf(data);
  let object;

  if (type === 'array') {
    object = [];
  } else if (type === 'object') {
    object = {};
  } else {
    return data;
  }

  if (type === 'array') {
    for (let i = 0; i < data.length; i ++) {
      object.push(deepCopy(data[i]));
    }
  } else if (type === 'object') {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        object[key] = deepCopy(data[key]);
      }
    }
  }
  return object;
}

// 生成 UUID
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
  });
}

// 下载
export function download(name, url) {
  const aDom = document.createElement('a');
  aDom.download = name;
  aDom.href = url;
  document.body.appendChild(aDom);
  aDom.click();
  aDom.remove(); // 下载之后把创建的元素删除
}

// 将路径参数转化为对象格式
export function getUrlQuery(url) {
  const query = url.substring(url.indexOf('?') + 1).split('&');
  const params = {};
  query.forEach(item => {
    const key_value = item.split('=');
    params[key_value[0]] = key_value[1];
  });
  return params;
}

// 将对象格式转化为路径参数
export function setUrlQuery(params) {
  let querys = [];
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      querys.push(key + '=' + params[key]);
    }
  }
  return querys.join('&');
}

// 获取对象深层值
export function getDeepValueOfObject(object, keyPath, defaultValue) {
  if (object) {
    const keys = keyPath.split(',');
    let value = object;
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      if (Boolean(value[key])) {
        value = value[key];
      } else {
        value = defaultValue;
      }
    }
    return value;
  } else {
    return defaultValue;
  }
}