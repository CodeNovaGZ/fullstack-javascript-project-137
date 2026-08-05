import state from './state.js';
import {validation} from './validation.js';

export default () => {
    document.querySelector('#app').innerHTML = `<h1>Agregador de RSS</h1><form id="rss-form">
  <div class="mb-3">
    <label for="inputRSS" class="form-label">RSS link</label>
    <input type="text" class="form-control" id="inputRSS" aria-describedby="agregarRSS">
    <div class="invalid-feedback" id="invalidRSS"></div>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Añadir</button>
  </form>`;

  const form = document.querySelector('#rss-form');
  const input = document.querySelector('#inputRSS');
  
  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      validation(input.value, state.feeds)
      .then((url)=>{
          state.feeds.push(url);

          state.form.value = '';
          state.form.error = null;

          input.value = '';
          input.focus();
      })
      .catch((err)=>{
          state.form.error = err.message;
      })
  })
}
