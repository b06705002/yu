import { useState, useEffect } from "react";

const Clock = () => {

    const [day, setDay] = useState(0);
    
    useEffect(() => {  // 可以在函数组件内处理生命周期事件，默认情况，每次渲染都会调用该函数
        const t = setInterval(() => {
            const birth = new Date("1999/7/20");
            const now = new Date();
            const days = parseInt(Math.abs(birth - now) / 1000 / 60 / 60 / 24);
            setDay(days)
        }, 1000)
    
        return () => {  // 每次卸载都执行此函数，清楚定时器
          clearTimeout(t)
        }
      }, [])

    return (
        <div>
            已經出生 {day} 天了
        </div>
    );
  }
  
  export default Clock;