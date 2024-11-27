import "./App.scss";
import Navigation from "./components/Navigation";
import Section from "./components/Page/Section";
import IconButton from "./components/IconButton";
import Page from "./components/Page";
import { useRef } from "react";

function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Navigation />
      <main className="page-content" ref={ref}>
        <Page className="custom-page" mainRef={ref} id={0}>
          <Section title={"Theo chương trình khuyến mãi -- page-0"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
          <Section title={"Theo chương trình khuyến mãi"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
          <Section title={"Theo chương trình khuyến mãi"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
          <Section title={"Khuyến mãi nổi bật"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page className="custom-page" mainRef={ref} id={1}>
          <Section title={"Theo chương trình khuyến mãi -- page-1"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page className="custom-page" mainRef={ref} id={2}>
          <Section title={"Theo chương trình khuyến mãi -- page-2"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page className="custom-page" mainRef={ref} id={3}>
          <Section title={"Theo chương trình khuyến mãi -- page-3"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page mainRef={ref} id={4}>
          <Section title={"Theo chương trình khuyến mãi -- page-4"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page mainRef={ref} id={5}>
          <Section title={"Theo chương trình khuyến mãi -- page-5"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page mainRef={ref} id={6}>
          <Section title={"Theo chương trình khuyến mãi -- page-6"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page mainRef={ref} id={7}>
          <Section title={"Theo chương trình khuyến mãi -- page-7"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
        <Page mainRef={ref} id={8}>
          <Section title={"Theo chương trình khuyến mãi -- page-8"}>
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
            <IconButton title={"Menu Item"} active={false} onClick={() => {}} />
          </Section>
        </Page>
      </main>
    </div>
  );
}

export default App;
