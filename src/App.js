import "./App.scss";
import Navigation from "./components/Navigation";
import Section from "./components/Page/Section";
import IconButton from "./components/IconButton";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="page-content">
        <Page className="custom-page">
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
      </main>
    </div>
  );
}

export default App;
