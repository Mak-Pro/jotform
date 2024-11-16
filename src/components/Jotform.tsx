"use client";

export const Jotform = () => {
  return (
    <>
      <iframe
        id="JotFormIFrame-243175611188054"
        title="Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/243175611188054"
        frameBorder={0}
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "539px",
          border: "none",
        }}
        scrolling="no"
      ></iframe>
    </>
  );
};
