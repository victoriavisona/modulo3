<template>
  <div>
    <div>
      <h4 class="mt-3"><strong>Game INFO:</strong></h4>
      <b-calendar
        :date-format-options="{
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }"
        locale="en"
      ></b-calendar>
    </div>
    <h4><strong>Additional Information:</strong></h4>
    <p>
      If deemed necessary by NYSL,<br />games may be shortened or cancelled<br />due
      to extreme weather conditions.
    </p>
    <h4><strong>Please direct all questions to:</strong></h4>
    <p>Michael Randall, League Coordinator</p>
    <p><strong>Phone:</strong>(630)690-8132</p>
    <h4 id="email">
      Email:
      <a href="michael.randall@chisoccer.org">michael.randall@chisoccer.org</a>
    </h4>
  </div>
</template>

<script>
export default {};
</script>
