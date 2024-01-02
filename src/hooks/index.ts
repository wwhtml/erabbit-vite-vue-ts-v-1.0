// 提供复用逻辑的函数（钩子）
import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'
import { ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'

/**
 * 数据懒加载函数
 * @param {Element} target - Dom对象
 * @param {Function} apiFn - API函数
 */
export const useLazyData = (target: any, callBack: any) => {
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }]) => {
      // isIntersecting 是否进入可视区
      if (isIntersecting) {
        stop()
        // 调用API函数获取数据
        callBack()
      }
    },
    // 配置选项，相交的比例大于0就触发
    {
      threshold: 0
    }
  )
}
