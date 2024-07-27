import React from 'react';

const Social = () => {
  return (
  <div className="flex flex-col justify-center items-center mt-10" id="socialWrapper">
    <button className="flex justify-center items-center w-72 border border-solid border-blue mb-3 h-8 rounded-xl">
      <a className="text-sm" href="/auth/facebook/">Продолжить через Facebook</a>
        <img className="w-4 h-4 ml-2" src="../icons/facebook-f.svg" alt=""/>
    </button>
  <button className="flex justify-center items-center w-72 border border-solid border-blue mb-3 h-8 rounded-xl">
    <a className="text-sm" href="/auth/facebook/">Продолжить через Apple</a>
    <img className="w-4 h-4 ml-2" src="../icons/apple.svg" alt=""/>
  </button>
<button className="flex justify-center items-center w-72 border border-solid border-blue mb-3 h-8 rounded-xl">
<a className="text-sm"href="/auth/facebook/">Продолжить через Google</a>
<img className="w-4 h-4 ml-2" src="../icons/google.svg" alt=""/>
  </button>
</div>
  );
};

export default Social;