import { StyledScrollToTopButton } from "./StyledButton.styled";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledScrollToTopButton
      className={isVisible ? "visible" : ""}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledScrollToTopButton>
  );
}

export default ScrollToTopButton;
