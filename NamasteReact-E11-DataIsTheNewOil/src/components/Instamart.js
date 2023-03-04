import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl mr-4">{title}</h3>
        <button
          className="text-2xl "
          onClick={() => (isVisible ? setIsVisible(null) : setIsVisible())}
        >
          {isVisible ? "⬆️" : "⬇️"}
        </button>
      </div>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio tellus, rutrum ac faucibus ac, pharetra eget velit. Nam facilisis nibh turpis, vel efficitur justo venenatis nec. Mauris vehicula rhoncus ultricies. Morbi dignissim ipsum vitae congue tempor. Etiam arcu tellus, hendrerit id mauris non, cursus pharetra turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas non rutrum sapien. Integer quis orci sit amet lectus semper congue. Maecenas neque sapien, aliquet quis scelerisque dignissim, ultricies in risus. Sed eros nunc, lobortis vel lacus gravida, commodo vulputate nisi. Fusce et ipsum vestibulum, semper metus id, egestas mauris."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(section = "about") => setVisibleSection(section)}
      />

      <Section
        title={"Team Instamart"}
        description={
          "Donec in mi eget diam volutpat fringilla et ac quam. Nullam dapibus, purus vitae congue consequat, felis quam rhoncus orci, ac maximus leo neque id dolor. Nulla lacinia accumsan sapien eu dictum. Aliquam eleifend interdum diam vel posuere. Etiam efficitur nibh metus, ut sodales magna fringilla et. Pellentesque pulvinar eros sapien, a dapibus nulla malesuada at. Cras convallis et massa et consequat. Curabitur cursus ullamcorper magna, a aliquam turpis cursus ac. Proin dui ex, tempus sit amet est vel, congue blandit leo. Praesent at magna nec purus condimentum eleifend. Suspendisse nec feugiat lectus. Praesent nec ipsum suscipit, suscipit libero sed, placerat dui. Mauris eleifend lorem eu volutpat porta. Proin placerat vitae lorem eu posuere. Sed eleifend nunc nisi, quis tempor dui bibendum id. Cras imperdiet ligula id quam posuere, quis condimentum erat mollis."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(section = "team") => setVisibleSection(section)}
      />

      <Section
        title={"Careers"}
        description={
          "Nullam mollis vehicula turpis a maximus. Phasellus sed euismod massa. Fusce commodo dui quis erat auctor, at tincidunt enim aliquam. Ut fermentum libero a nulla porttitor, eget mattis leo hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tellus cursus, molestie eros quis, porttitor sapien. Nullam leo tellus, ultricies in imperdiet ut, congue sed risus. Vestibulum elementum interdum ligula a mattis. Vestibulum consectetur justo id mauris commodo ultrices. Quisque porttitor a urna et commodo."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(section = "career") => setVisibleSection(section)}
      />
    </>
  );
};

export default Instamart;
