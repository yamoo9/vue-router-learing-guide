<template>
  <div>
    <h2>페이지를 찾을 수 없습니다.</h2>
    <p aria-label="404 Not Found" lang="en">404</p>
    <span>😳</span>
  </div>
</template>

<style scoped>
div {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-block-size: 80vh;

  h2 {
    font-weight: 400;
    font-size: 24px;
    filter: drop-shadow(0 0 10px hsla(var(--black), 0.5));
  }

  p {
    user-select: none;
    margin-block: 0;
    font-size: 240px;
    font-weight: 900;
    line-height: 1;

    background: linear-gradient(
      to bottom,
      hsla(var(--primary)) 0%,
      hsla(var(--secondary), 0.5) 60%,
      transparent 75%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 10px hsla(var(--black), 0.3)) blur(2px);
    opacity: 0.7;
  }

  span {
    position: absolute;
    bottom: 50%;
    translate: 0 70%;
    font-size: 70px;
    opacity: 0.5;
    scale: 0.7;
    animation: dungdung 6s ease-in-out infinite;
    filter: hue-rotate(80deg) saturate(30%);
  }
}

@keyframes dungdung {
  50% {
    scale: 1.3;
    translate: 0 60%;
    opacity: 1;
  }
}
</style>
