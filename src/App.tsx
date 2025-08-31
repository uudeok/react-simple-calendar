import { Calendar } from './compoentns/Calendar/Calendar';

function App() {
    return (
        <div style={{ maxWidth: '420px', display: 'flex', gap: '20px' }}>
            <Calendar />
            <Calendar theme="dark" />
        </div>
    );
}

export default App;

/**
 * 1, 사용하는 쪽에서 너비를 조정할 수 있도록 함 -> 캘린더의 너비는 부모의 100% 이다.
 */
