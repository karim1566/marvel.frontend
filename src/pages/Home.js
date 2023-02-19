import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return Cookies.get("token-marvel") ? (
    <div className="container">
      <h1>Marvel Univers</h1>
      <p style={{ color: "white" }}>
        Some of Timely Comics (the 1930s and '40s predecessor to Marvel Comics)
        characters coexisted in the same world was first established in Marvel
        Mystery Comics #7 (1940) where Namor was mentioned in Human Torch's
        story, and vice versa. Later several superheroes (who starred in
        separate stories in the series up to that point) met each other in a
        group dubbed the All-Winners Squad. Though the concept of a shared
        universe was not new or unique to comic books in 1961, writer/editor
        Stan Lee, together with several artists including Jack Kirby and Steve
        Ditko, created a series of titles where events in one book would have
        repercussions in another title and serialized stories would show
        characters' growth and change. Headline characters in one title would
        make cameos or guest appearances in other books. Fantastic Four #12 is
        the first crossover comic book in modern Marvel continuity (first
        meeting of Fantastic Four and the Hulk). Eventually, many of the leading
        heroes (Ant-Man, Wasp, Iron Man, Thor and the Hulk) assembled into a
        team known as the Avengers, which debuted in September 1963. This was
        not the first time that Marvel's characters had interacted with one
        another—Namor the Sub-Mariner and the original Human Torch had been
        rivals when Marvel was Timely Comics (Marvel Vault), under editor Martin
        Goodman — but it was the first time that the comic book publisher's
        characters seemed to share a world. The Marvel Universe was also notable
        for setting its central titles in New York City; by contrast, many DC
        heroes live in fictional cities. Care was taken to portray the city and
        the world as realistically as possible, with the presence of superhumans
        affecting the common citizens in various ways.[4] Over time, a few
        Marvel Comics writers lobbied Marvel editors to incorporate the idea of
        a Multiverse resembling DC's parallel worlds; this plot device allows
        one to create several fictional universes which normally do not overlap.
        What happens on Earth in the main Marvel Universe would normally not
        affect what happens on a parallel Earth in another Marvel-created
        universe. However, writers would have the creative ability to write
        stories in which people from one such universe would visit this
        alternative universe. In 1982, Marvel published the miniseries Contest
        of Champions, in which all of the major heroes in existence at the time
        were gathered together to deal with one threat. This was Marvel's first
        miniseries. Each issue contained biographical information on many major
        costumed characters; these biographies were a precursor to Marvel's
        series of reference material, The Official Handbook of the Marvel
        Universe, which followed shortly on the heels of Contest of Champions.
      </p>
    </div>
  ) : (
    navigate("/signup")
  );
};

export default Home;
