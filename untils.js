/**
 * 获取当前的url
 */

export const currentURL = () => window.location.href

// 事例
currentURL() // 'https://google.com'

/**
 * 
 * 创建一个包含当前URL参数的对象
 */

export const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

// 事例
getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
getURLParameters('google.com'); // {}


/**
 * 
 * js 数字千分位格式化
 */
export const  format= num => {

    return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');

}

// 事例

format(20200305) // "20,200,305.00"

