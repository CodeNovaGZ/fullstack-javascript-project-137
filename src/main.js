import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `<h1>Agregador de RSS</h1><form>
  <div class="mb-3">
    <input type="email" class="form-control" id="inputRSS" aria-describedby="agregarRSS">
  </div>
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>`

setupCounter(document.querySelector('#counter'))
