import Head from "next/head"
import Image from "next/image"
import { NextPage } from "next"

import { BoardType } from "components/BoardType/BoardType"
import { Footer } from "components/Footer/Footer"
import { TextDivider } from "components/TextDivider/TextDivider"
import { UpcomingEvent } from "components/UpcomingEvent/UpcomingEvent"
import styles from "../styles/Home.module.sass"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.content}>
          <section className={styles.hero}>
            <h1>
              Shred
              <br />
              quarters
            </h1>
            <div className={styles.iso_truck}>
              <Image
                src={"/img/truck_iso.svg"}
                layout="responsive"
                width="64"
                height="64"
                alt="hero_blob"
              />
            </div>
            <p>
              An all-inclusive skate club focused primarily on skateboarding and
              longboarding, but open to anything on wheels! Meet fellow
              shredders in an inclusive, social, and community-oriented club
              right here on the Virginia Tech campus.
            </p>
          </section>
          <TextDivider header="The Crew" float={20} id="crew" />
          <section>
            <ul>
              <BoardType
                src="/img/skateboard_iso.svg"
                alt="Skateboard isometric picture"
              >
                The hallmark of Shredquarters - you can find a variety of
                skateboarders affiliated with the club. From casual street
                skaters to complex trick enthusiasts, you are sure to find your
                crowd here! Shredquarters provides a unique community experience
                where even beginner shredders can thrive on their deck.
              </BoardType>
              <BoardType
                src="/img/longboard_iso.svg"
                alt="Longboard isometric picture"
              >
                Shredquarters is packed with avid longboarders of all types:
                cruising, freestyle, dancing, and more! No matter your flow, you
                are sure to find your crew here. Learn different styles from the
                community and up your longboarding game.
              </BoardType>
              <BoardType
                src="/img/cruiser_iso.svg"
                alt="Skateboard isometric picture"
              >
                You will find them zooming around campus, cruisers are a unique
                part of Shredquarters. Although not trick-savvy, the cruiser
                community here at Shredquarters is filled with talented riders
                that have fallen in love with that familiar feeling of gliding
                on air. If you ride a cruiser, Shredquarters is the perfect
                place for you!
              </BoardType>
            </ul>
          </section>
          <TextDivider header="The Team" float={80} id="team" />
          <TextDivider header="The Plan" float={20} id="plan" />
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
          <TextDivider header="The Network" float={80} id="network" />
          <section className={styles.network}>
            <form className={styles.contact} noValidate autoComplete="off">
              <div className={styles.form_row} id={styles.firstname}>
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className={styles.form_row} id={styles.lastname}>
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div className={styles.form_row} id={styles.email}>
                <label>Email</label>
                <input type="email" />
              </div>
              <div className={styles.form_row} id={styles.phone}>
                <label>Phone</label>
                <input type="tel" />
              </div>
              <div className={styles.form_row} id={styles.subject}>
                <label>Subject</label>
                <input id="text" />
              </div>
              <div className={styles.form_row} id={styles.message}>
                <label>Message</label>
                <textarea />
              </div>
              <button>
                Send it
                <div>
                  <Image
                    width={24}
                    height={12}
                    alt=""
                    src="/img/RightArrow.svg"
                  />
                </div>
              </button>
            </form>
            <div className={styles.wheel_iso}>
              <div>
                <Image
                  width={64}
                  height={64}
                  alt=""
                  src="/img/wheel_iso.svg"
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
