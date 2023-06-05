/* 
Copyright 2023 Солодовник Игорь Николаевич, Симоновский Даниил Леонидович, Козырев Даниил Владимирович, Ануфриева Виктория Дмитриевна

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const switchScreenAnimation = (from, to, cb) => () => {
  from.classList.add('hidden');
  to.classList.remove('hidden');
  from.classList.remove('hide_animation');
  to.classList.add('appear_animation');
  cb();
};

const switchScreen = (from, to, cb) => () => {
  from.classList.remove('appear_animation');
  from.classList.add('hide_animation');
  from.addEventListener('animationend', switchScreenAnimation(from, to, cb), {once : true});
};

export { switchScreen };
