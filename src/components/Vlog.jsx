import "bootstrap/dist/css/bootstrap.min.css";

const Vlog = () => {
  return (
    <div className='w-50 d-flex justify-content-center flex-column align-items-center '>
      <div
        className='titleVlog m-5 w-75'
        style={{ fontWeight: "800", fontSize: "48px" }}
      >
        10 Secrets for managing a remote team{" "}
      </div>
      <div className='profileVlog'></div>
      <div className='d-flex flex-row align-items-center w-75 justify-content-start m-5'>
        <div
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        ></div>
        <div className='nameVlog'>Shedrack eze | 2nd January, 2022</div>
      </div>
      <div
        className='bg-primary m-5'
        style={{ width: "900px", height: "450px" }}
      ></div>
      <div
        className='textVlog w-75'
        style={{ fontWeight: "600", fontSize: "18px" }}
      >
        If you’re thinking of starting a blog of your own, but just don’t have a
        clue on what to blog about, then fear not! In this article, I have
        included a whole load of blog examples from a wide variety of different
        niches, all run on different blogging platforms like WordPress, Joomla!
        and Drupal. Since the beginning of the internet, millions and millions
        and millions of blogs have been created. Many have died due to lost
        interest or their owners giving up on the idea, while others have
        thrived and continue to grow, making money and earning their owners a
        steady income. It’s a constant evolution of content that keeps people
        coming back for more, especially if these blogs contact highly
        resourceful material that people find useful and interesting. Each
        example listed in this blog post are all different in some way and all
        bring something unique to their readers & subscribers. I want to show
        you what is possible and how you can take inspiration from them and
        create an awesome blog of your own. Some of these blogs make over $100k
        a month, others are just a hobby for their owners, but all have the same
        purpose at their core… the love of writing and sharing information. Some
        of these blogs make over $100k a month, others are just a hobby for
        their owners, but all have the same purpose at their core… the love of
        writing and Some of these blogs make over $100k a month, others are just
        a hobby for their owners, but all have the same purpose at their core…
        the love of writing and sharing information. Some of these blogs make
        over $100k a month, others are just a hobby for their owners, but all
        have the same purpose at their core… the love of writing and sharing
        information.
      </div>
      <div className='d-flex flex-row align-items-center w-75 justify-content-start m-5'>
        <div
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
          className='m-2'
        ></div>
        <div className='nameVlog'>
          <div style={{ fontWeight: "600", fontSize: "14px" }}>Written by</div>
          <div style={{ fontWeight: "400", fontSize: "24px" }}>
            Shedrack Eze
          </div>
          <div
            style={{ fontWeight: "600", fontSize: "14px", color: "#989898" }}
          >
            CEO Team App
          </div>
        </div>
      </div>
      <hr className='w-75' />
      <div className='d-flex flex-column justify-content-start w-75'>
        <div
          className='join m-3'
          style={{ fontWeight: "400", fontSize: "24px" }}
        >
          join the conversation
        </div>
        <div className='d-flex flex-row '>
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "red",
              borderRadius: "50%",
            }}
            className='m-3'
          ></div>
          <input
            type='text'
            className='w-75 m-3'
            style={{ height: "100px" }}
            placeholder='Comments'
          />
        </div>
      </div>
    </div>
  );
};
export default Vlog;
