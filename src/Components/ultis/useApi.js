import { useState } from 'react';
import axios from 'axios';
import useDebouncedPromise from './useDebouncedPromise';

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);
  const debouncedAxios = useDebouncedPromise(axios, config.debounceDelay);

  async function call(localConfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });
    const finalConfig = {
      baseURL: 'http://localhost:2000',
      ...config,
      ...localConfig,
    };

    let response = null;
    const fn = finalConfig.debounced ? debouncedAxios : axios;
    try {
      response = await fn(finalConfig);
      setRequestInfo({
        ...initialRequestInfo,
        data: response.data,
      });
    } catch (error) {
      setRequestInfo({
        ...initialRequestInfo,
        error,
      });
    }

    if (config.onCompleted) {
      config.onCompleted(response);
    }
    return response;
  }

  return [call, requestInfo];
}
