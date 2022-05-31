import { TextDivider } from "components/TextDivider/TextDivider"
import { BoardType } from "components/BoardType/BoardType"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.sass"
import { UpcomingEvent } from "components/UpcomingEvent/UpcomingEvent"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1>
              <span>Shred</span>
              <span>quarters</span>
            </h1>
            <p>
              An all-inclusive skate club focused primarily on skateboarding and
              longboarding, but open to anything on wheels! Meet fellow
              shredders in an inclusive, social, and community-oriented club
              right here on the Virginia Tech campus.
            </p>
          </div>
          <div className={styles.iso_truck}>
            <Image
              src={"/img/truck_iso.svg"}
              layout="responsive"
              width="64"
              height="64"
              alt="hero_blob"
            />
          </div>
        </section>
        <TextDivider header="The Crew" float={20} />
        <section>
          <BoardType
            src="/img/skateboard_iso.svg"
            alt="Skateboard isometric picture"
          >
            The hallmark of Shredquarters - you can find a variety of
            skateboarders affiliated with the club. From casual street skaters
            to complex trick enthusiasts, you are sure to find your crowd here!
            Shredquarters provides a unique community experience where even
            beginner shredders can thrive on their deck.
          </BoardType>
          <BoardType
            src="/img/longboard_iso.svg"
            alt="Longboard isometric picture"
          >
            Shredquarters is packed with avid longboarders of all types:
            cruising, freestyle, dancing, and more! No matter your flow, you are
            sure to find your crew here. Learn different styles from the
            community and up your longboarding game.
          </BoardType>
          <BoardType
            src="/img/cruiser_iso.svg"
            alt="Skateboard isometric picture"
          >
            You will find them zooming around campus, cruisers are a unique part
            of Shredquarters. Although not trick-savvy, the cruiser community
            here at Shredquarters is filled with talented riders that have
            fallen in love with that familiar feeling of gliding on air. If you
            ride a cruiser, Shredquarters is the perfect place for you!
          </BoardType>
        </section>
        <TextDivider header="The Team" float={80} />
        <TextDivider header="The Plan" float={20} />
        <section className={styles.events}>
          <ul>
            <UpcomingEvent
              day={5}
              month="June"
              name="Lorem ipsum dolor sit amet" // TODO - On extended hover, show description of event
              location="Best possible Place"
              link="https://goo.gl/maps/23YMJ86AsvqjRzCh9"
            />
          </ul>
        </section>
        <TextDivider header="The Network" float={80} />
        <section className={styles.network}>
          <form className={styles.contact}>
            <div className={styles.form_row}>
              <label>First Name</label>
              <input />
            </div>
            <div className={styles.form_row}>
              <label>Last Name</label>
              <input />
            </div>
            <div className={styles.form_row}>
              <label>Email</label>
              <input />
            </div>
            <div className={styles.form_row}>
              <label>Subject</label>
              <input />
            </div>
            <div className={styles.form_row}>
              <label>Message</label>
              <textarea />
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Home
