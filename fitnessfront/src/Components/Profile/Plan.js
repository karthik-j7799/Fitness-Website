import React from "react";

function Plan({ BMI }) {
  if (BMI < 18.5) {
    return (
      <>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                View Plan for Gaining weight
              </button>
            </h2>
            <div
              id="collapseOne"
              // class="accordion-collapse collapse show"
              class="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="container">
                  <div className="row">
                    <div className="col">Breakfast (8:00-8:30AM)</div>
                    <div className="col">
                      2 egg brown bread sandwich + green chutney + 1 cup milk +
                      3 cashews + 4 almonds + 2
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />3 onion stuffed parantha + 1 cup curd + 3 cashews +
                      4 almonds + 2 walnuts
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Mid-Meal (11:00-11:30AM)</div>
                    <div className="col">
                      1 cup banana shake
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup mango shake
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Lunch (2:00-2:30PM)</div>
                    <div className="col">
                      1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2
                      cup rice + 1/2 cup low fat curd + salad
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup moong dal/ chicken curry + 1 cup potato and
                      caulifllower vegetable + 3 chapatti + 1/2 cup rice + salad
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Evening (4:00-4:30PM)</div>
                    <div className="col">
                      1 cup strawberry smoothie + 1 cup vegetable poha
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup pomegranate juice + 2 butter toasted bread
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Dinner (8:00-8:30PM)</div>
                    <div className="col">
                      1.5 cup chicken curry + 3 chapatti + salad
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup beans potato vegetable + 3 chapatti + salad
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (BMI > 18.5 && BMI < 24.9) {
    return (
      <>
      <hr/>
        <h3> Congratulations in maintaining your weight.</h3>
        <hr/>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                View Plan for Maintaining weight
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="container">
                  <div className="row">
                    <div className="col">Breakfast (8:00-8:30AM)</div>
                    <div className="col">
                      chapati-4 + Egg roast 1/2 cup 2 egg
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />
                      Chicken sandwich (4 slice bread) + 1 cup skimmed milk.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Mid-Meal (11:00-11:30AM)</div>
                    <div className="col">
                      green gram sprouts 1 cup
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 Portion fruit salad + Cottage cheese.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Lunch (2:00-2:30PM)</div>
                    <div className="col">
                      4 Roti +1/2 cup salad + Fish curry (180 gm fish) + 1/2 cup
                      cabbage subji.
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />
                      Veg pulav rice 1.5 cup + 1 cup Soya Chunk curry + 1/2 cup
                      Low fat curd.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Evening (4:00-4:30PM)</div>
                    <div className="col">
                      1 Portion fruit+ cottage cheese
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup light tea + Chicken salad 1 cup.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Dinner (8:00-8:30PM)</div>
                    <div className="col">
                      3 Roti/Chapati + Tomato subji 1/2 cup.
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />3 roti/ Chapathi + Lady finger subji 1/2 cup.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (BMI > 25 && BMI < 29.9) {
    return (
      <>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                View Plan for Losing weight (Overweight)
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="container">
                  <div className="row">
                    <div className="col">Breakfast (8:00-8:30AM)</div>
                    <div className="col">
                      chapati-4 + Egg roast 1/2 cup 2 egg
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />
                      Chicken sandwich (4 slice bread) + 1 cup skimmed milk.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Mid-Meal (11:00-11:30AM)</div>
                    <div className="col">
                      green gram sprouts 1 cup
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 Portion fruit salad + Cottage cheese.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Lunch (2:00-2:30PM)</div>
                    <div className="col">
                      4 Roti +1/2 cup salad + Fish curry (180 gm fish) + 1/2 cup
                      cabbage subji.
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />
                      Veg pulav rice 1.5 cup + 1 cup Soya Chunk curry + 1/2 cup
                      Low fat curd.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Evening (4:00-4:30PM)</div>
                    <div className="col">
                      1 Portion fruit+ cottage cheese
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup light tea + Chicken salad 1 cup.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Dinner (8:00-8:30PM)</div>
                    <div className="col">
                      3 Roti/Chapati + Tomato subji 1/2 cup.
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />3 roti/ Chapathi + Lady finger subji 1/2 cup.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (BMI > 30) {
    return (
      <>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                View Plan for Losing weight (Obesity)
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="container">
                  <div className="row">
                    <div className="col">Breakfast (8:00-8:30AM)</div>
                    <div className="col">
                      chapati-2 + Egg roast 1/2 cup 1 egg
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />
                      Chicken sandwich (2 slice bread)
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Mid-Meal (11:00-11:30AM)</div>
                    <div className="col">
                      green gram sprouts 1 cup
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 Portion fruit salad.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Lunch (2:00-2:30PM)</div>
                    <div className="col">
                      2 Roti +1/2 cup salad + 1/2 cup cabbage subji.
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />
                      Veg pulav rice 1 cup + 1 cup Soya Chunk curry
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Evening (4:00-4:30PM)</div>
                    <div className="col">
                      1 Portion fruit
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />1 cup light tea
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">Dinner (8:00-8:30PM)</div>
                    <div className="col">
                      1 Roti/Chapati + Tomato subji 1/4 cup.
                      <hr />
                      <p style={{ textAlign: "center" }}>
                        <b>Or</b>
                      </p>
                      <hr />2 roti/ Chapathi + Lady finger subji 1/2 cup.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Plan;
