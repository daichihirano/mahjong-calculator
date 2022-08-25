import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'

import WinHand from './WinHand';
function App() {
  return (
    <div>
      <h1>符計算</h1>
      <WinHand message={"hello"}/>
      <div>
        上がり方
      </div>
      <div>
        順子何個？
      </div>
      <div>
        明刻何個？
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        暗刻
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        明槓
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        暗槓
        <div>
          2~8?
        </div>
        <div>
          1,9,字牌
        </div>
      </div>
      <div>
        雀頭は？
        <div>数牌</div>
        <div>オタ風</div>
        <div>自風</div>
        <div>場風</div>
        <div>三元牌</div>
      </div>
      <div>
        待ちの形は？
        <div>両面</div>
        <div>シャボ</div>
        <div>ペンチャン</div>
        <div>カンチャン</div>
        <div>単騎</div>
        <div>ノベタン</div>
      </div>

    </div>
    
  );
}

export default App;
