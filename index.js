let clickCounter = 0;
function handleClick() {
    console.log("click handled")
    clickCounter += 1;
    gtag('event', 'click_event_from_personal', {
        'app_name': 'testing-google-analytics',
        'screen_name': 'Personal POC',
        'click_counter': this.clickCounter
      });
}