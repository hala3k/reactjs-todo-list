import React from "react";

function ActionBar(props) {
  return (
    <div class="footer_menu">
      <div class="items_no">5 items</div>
      <div class="filter_items">
          <span class="active">All</span> &nbsp; &nbsp;
          <span>Active</span> &nbsp; &nbsp;
          <span>Completed</span>
      </div>
      <div class="clear_completed">Clear Completed</div>
    </div>
  );
}

export default ActionBar;