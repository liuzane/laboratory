import { heweather } from '@/api/config';


// 获取天气信息
export const getHeweaterByType = (params, config) => {
  const type = params.type || 'now';
  delete params.type;
  return heweather({
    method: 'get',
    url: `/s6/weather/${ type }`,
    params,
    ...config,
  });
};