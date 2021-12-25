<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="footer-widget">
            <h3>Stay in touch</h3>
            <div class="footer-widget-content">
              <a href="mailto:sales@example.com" class="contact-link">sales@example.com</a>
              <a href="mailto:support@example.com" class="contact-link red"> support@example.com </a>
              <a href="tel:0121234" class="contact-link">(123) 456-789</a>
              <div class="footer-social">
                <ul>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                  <li><a href="#"><i class="fa fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer-widget">
            <h3>Latest Events</h3>
            <div class="footer-widget-content">
              <div class="media">
                <div class="media-left">
                  <a href="#"><img class="media-object" src="http://placehold.it/60x60" alt="..."></a>
                </div>
                <div class="media-body">
                  <p><a href="#">vulputate velit esse consequat. </a></p>
                  <span>September 30, 2016 </span>
                </div>
              </div>
              <div class="media">
                <div class="media-left">
                  <a href="#."><img class="media-object" src="http://placehold.it/60x60" alt="..."></a>
                </div>
                <div class="media-body">
                  <p><a href="#">vulputate velit esse consequat. </a></p>
                  <span>September 30, 2016 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer-widget">
            <h3>Opening Hour</h3>
            <div class="footer-widget-content">
              <div class="open-time ">
                <ul class="opening-time">
                  <li><span><i class="fa fa-times"></i></span><p class="clock-time"><strong>monday :</strong> closed</p>
                  </li>
                  <li><span><i class="fa fa-check"></i></span><p><strong>tue-fri :</strong> 8am - 12am</p></li>
                  <li><span><i class="fa fa-check"></i></span><p><strong>sat-sun :</strong> 7am - 1am</p></li>
                  <li><span><i class="fa fa-check"></i></span><p><strong>holydays :</strong> 12pm-12am</p></li>
                </ul>
              </div>
            </div>
          </div></div>

        <div class="col-sm-3">
          <div class="footer-widget">
            <h3>Latest Events</h3>
            <div class="footer-widget-content">
              <div class="images-gellary">
                <ul>
                  <li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 01"></a></li>
                  <li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 02"></a></li>
                  <li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 03"></a></li>
                  <li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 04"></a></li>
                  <li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 05"></a></li>
                  <li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 06"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.red {
  color: darkgreen !important;
}
footer {
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px white;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  background-color: #f5f5f5;
  padding: 80px 0;
}
footer .footer-widget h3 {
  margin-bottom: 30px;
}
footer .contact-link {
  display: inline-block;
  width: 100%;
  color: #333;
}
footer .footer-social ul {
  padding-left: 0;
}
footer .footer-social ul li {
  list-style: none;
  float: left;
  padding: 0 10px;
}
footer .footer-social ul li:first-child {
  padding-left: 0;
}
footer .footer-social ul li a {
  font-size: 20px;
  color: #333;
}
footer .footer-social ul li a:hover {
  color: darkgoldenrod;
}
footer .opening-time {
  padding-left: 0;
}
footer .opening-time li {
  list-style: none;
}
footer .opening-time li span {
  float: left;
  padding-right: 10px;
}
footer .opening-time li span .fa-times {
  color: darkgreen;
}
footer .opening-time li strong {
  color: darkgreen;
}
footer .media-body a {
  color: #333;
}
footer .media-body a:hover {
  color: darkgreen;
}
footer .media-body span {
  color: #969696;
}
footer .images-gellary ul {
  padding-left: 0;
}
footer .images-gellary ul li {
  list-style: none;
  float: left;
  margin: 0 3% 2% 0;
  width: 31%;
  position: relative;
}
footer .images-gellary ul li:nth-child(3n) {
  margin: 0 0 1%;
}

</style>
