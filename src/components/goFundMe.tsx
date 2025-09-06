import React, { useEffect } from 'react';

const GoFundMeWidget = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.gofundme.com/static/js/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://www.gofundme.com/static/js/embed.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []); 

  return (
    <div 
      className="gfm-embed" 
      data-url="https://www.gofundme.com/f/teamtails-tkpkff/widget/large?sharesheet=undefined&attribution_id=sl:4829d0c1-b174-4653-89b7-9623b09309f6"
    ></div>
  );
};

export default GoFundMeWidget;
