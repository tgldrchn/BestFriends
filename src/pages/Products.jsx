import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Vlogpost from "../components/Vlogposts";

const Products = () => {
  return (
    <div className='vlog bg-light w-100' style={{ height: "2000px" }}>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <Container className='w-100 d-flex justify-content-center align-items-center flex-column'>
          <Row className='w-100 d-flex justify-content-center align-items-center flex-column'>
            <Col>
              <div className='m-5'>
                <div
                  className='title'
                  style={{ fontSize: "48px", fontWeight: "800" }}
                >
                  Blog posts
                </div>
                <div
                  className='miniTitle text-muted'
                  style={{
                    fontSize: "18px",
                    lineHeight: "29px",
                    fontWeight: "600",
                  }}
                >
                  Our latest updates and blogs about managing your team
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
          </Row>
          <Row>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
          </Row>
          <Row>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
            <Col className='gridText border bg-white m-5 rounded-5 p-0'>
              <Vlogpost
                headerImage='https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1667174400&Signature=PDLrUOpGHKBtPmb5DucZvCzBsL6lgQhdtlv43UkLfskh1BrB3jlwCdiMpwpAwdZSqCKf61TP4VO896cgL~E-HE7JMLrVYhIvhWduZzD1ixQA5obARXGy-y4wBsEvXK-CNKozpOPQRnUBd9bUprZy71BHsiobC0iq663lQeDlFy0HEwDe3-wbyWFyyc4rMwE4UTICIccWqZQYohj6kuGaANC1cm36U~Uo7n1TfSeT15bqiBNNDrM-2XpybnOGC1NNPdz25TjCiIq3sBcMDpgL-xggu0kMg~5yA-FYBOh6NmmNbG5IU5uIgr8ozXeZK7qt-DZwcF1ofFpUv7oLLQICPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                title='Data-Driven Design is Killing Our Instincts'
                text='Our latest updates and blogs about managing your team
                Our latest updates and blogs about managing your team'
                date='2nd January, 2022'
                firstName='Amy'
                lastName='Classen'
                image='https://s3-alpha-sig.figma.com/img/fce7/6251/0393bebe5cfe1823cc7c5a0d9099b809?Expires=1667174400&Signature=ATPyONk5R6tupfai-9k6S7Clkh7UTU0JlWCeK-9e6A3qPzhLLJNAOMdtmsmDqTLcfER6-Z5aOj1BPbNRNcprA0pS7tGVchqy87uH5AdN39ha0pat1fqZ7ZD5QxMeO6WPvkEVwzgU~Ln175J3~xlBgE1fD1VL3lPMmyu-crd26G5SgAtC0Bfg-hg81~BkcMK7B9NjH8uNNTZLm-v46k1fVBzCotuTqUJ9jxcy5zvEfFKl-dTKAiqSPOrxKsWey7yQRcWbnUB95vgtrgBgUIoWQpwtt7vZXx-MtuY9jO-zF9UjF-ip~2elZMCls4fvvuABB1GYc0~FPO0Est4M0UnElA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              />
            </Col>
          </Row>
          <Button variant='secondary' style={{ width: "165px" }}>
            Next
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Products;
