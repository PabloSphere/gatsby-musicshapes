import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'team' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Team</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>

          <p>
            ALAN THOMPSON, MT-BC, NRMT, LCAT <br />
            <i>Founder | Clinical Supervisor | Music Therapist</i> <br />
            Alan is a graduate of the Music Therapy Master’s program at New York
            University, a board certified Music Therapist, Licensed Creative
            Arts Therapist, a Certified Nordoff-Robbins Music Therapist. He has
            15 years experience as a music therapist working with a variety of
            populations across New York City, including children and adults with
            developmental, physical, and emotional disabilities. He has worked
            extensively in adult and child inpatient and outpatient psychiatry,
            including Bellevue Hospital, Jacobi Hospital, The Ryan White Center,
            and Mt. Sinai-St. Luke’s Hospital. He currently runs the Music
            Therapy Program at Covenant House NY, New York Cit'y’s largest
            provider serving youth experiencing homelessness. Alan frequently
            conducts workshops and presentations on his work as both educator
            and in promotion of music therapy.{''} Alan is a pianist,
            song-writer, and producer. He is also a software engineer, loves
            plants, documentaries, and is continuously exploring and developing
            his culinary expressions.
          </p>
          <p>
            MICHAEL DEGROTTOLE <br />
            Program Consultant | Music Therapist <br />
            Michael has spent 35 + years in the field of developmental
            disabilities, specializing in the treatment of autistic children and
            adults. Throughout his career he has taken on various clinical and
            administrative roles, consistently creating innovative models to
            serve those with special needs. His experience includes 11 years at
            Life’s WORC, where he worked in residential services and human
            resources, and four years at the Floating Hospital, where he served
            as director of rehabilitation services for 92 clinics throughout New
            York State. He spent the last 14 years as the vice president of
            programs at Mercy Home for Children, and is currently the Associate
            Executive Director at the Association for Children with Down
            Syndrome-ACDS Inc. Aside from his administrative duties, Michael is
            a musician and jazz enthusiast, and as such, is passionate about
            creative arts therapies. He was the lead music therapist and
            clinical director for the Heartsong Foundation; he also co-founded
            the Music Therapy Project, a placement program for some of the
            industry’s top creative arts therapists. He studied music therapy at
            NYU and currently works as a consultant with MusicShapes Creative
            Arts Therapy, PLLC and the ANIBIC SONG program.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            We provide a variety of Music Therapy services, including Individual
            & Group Music Therapy, Adaptive Music Lessons, Music Therapy Studio,
            Music Therapy Performance, and The Home & Community Music Project.{' '}
          </p>
          <p>
            Our therapists are Board-Certified Music Therapists (MT-BC) and/or
            Licensed Creative Arts Therapists (LCAT) and carry professional
            liability insurance. Therapists participate in ongoing clinical
            supervision.{' '}
          </p>
          <p>
            MusicShapes has some exciting endeavors in the works. In addition to
            our clinical services, we are developing a rich Continuing Education
            curriculum for Music Therapists and Health Care Providers. Watch
            this space for course offerings!
          </p>
          <p>
            MUSIC THERAPY ASSESSMENT <br />
            Every Music Therapy service is initiated with an assessment and
            development of a treatment plan. MusicShapes follows the guidelines
            set forth by the{' '}
            <a href="https://www.musictherapy.org/about/standards/">
              {' '}
              American Music Therapy Association of Clinical Practice
            </a>
            :<br />
            <ul>
              <li>
                The music therapy assessment will include the general categories
                of psychological, cognitive, communicative, social, and
                physiological functioning focused on the client's needs and
                strengths. The assessment will also determine the client's
                responses to music, music skills and musical preferences.{' '}
              </li>

              <li>
                The music therapy assessment will explore the client's culture.
                This can include but is not limited to race, ethnicity,
                language, religion/spirituality, socioeconomic status, family
                experiences, sexual orientation, gender identity or expression,
                and social organizations.{' '}
              </li>

              <li>
                {' '}
                All music therapy assessment methods will be appropriate for the
                client's chronological age, diagnoses, functioning level, and
                culture(s). The methods may include, but need not be limited to
                observation during music or other situations, interview, verbal
                and nonverbal interventions, and testing. Information may also
                be obtained from different disciplines or sources such as the
                past and present medical and social history in accordance with
                HIPAA permission regulation.{' '}
              </li>
            </ul>
            The Music Therapist will develop an individualized treatment plan
            based upon the music therapy assessment, the client's prognosis, and
            applicable information from other disciplines and sources. The
            client will participate in program plan development when
            appropriate.
          </p>
          <p>
            INDIVIDUAL MUSIC THERAPY <br />
            Individual sessions are typically 30-45 minutes. Our therapists
            engage the client in the creative process of active music playing
            using a variety of instruments through improvisation and specific
            music interventions to address treatment plan goals.
          </p>
          <p>
            GROUP MUSIC THERAPY <br />
            Group sessions ideally have 6-8 clients. Our therapists engage group
            members in active music playing using a variety of instruments and
            specific music interventions to facilitate positive social and
            interpersonal experiences.
          </p>
          <p>
            ADAPTIVE MUSIC LESSONS <br />
            Adaptive Music Lessons combine music therapy and music education, as
            they adapt to the development and processing needs of the child or
            adult. The lessons are individualized and flexible to simultaneously
            address emotional, behavioral, and cognitive barriers and to provide
            a positive musical experience that builds confidence and increases
            the student’s overall motivation to learn.
          </p>
          <p>
            MUSIC THERAPY STUDIO <br />
            Music Therapy Studio sessions combine music therapy and the
            recording process. Sessions include lyric writing, music
            composition, and recording. If the child or adult shows interest,
            and if clinically appropriate, sessions may also include engagement
            in the technical aspects of recording and sound engineering. Music
            Therapy Studio sessions are typically individual, but may also
            incorporate others when clinically appropriate
          </p>
          <p>
            MUSIC PERFORMANCE
            <br />
            GROUP Music Performance Groups are more structured than typical
            music therapy groups. The music therapist supports group members as
            they make decisions and collaborate on performing original music or
            original renditions of pre-existing songs.
          </p>
          <p>
            THE HOME & COMMUNITY MUSIC PROJECT <br />
            The Home & Community Music Therapy Project (HCMP) aims to provide
            individual music therapy to children and adolescents with complex
            mental health needs in their home and/or community. Over the course
            of 12-weeks the client and therapist will follow a 6-step process,
            including: introduction to HCMP, assessment, lyric writing, music
            composition, recording, and termination.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            We would love to hear from you. Contact us to schedule a free
            30-minute phone consultation, or send us any questions you have
            about Music Therapy and our services.{' '}
          </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/musicshapes/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/musicshapescat/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
