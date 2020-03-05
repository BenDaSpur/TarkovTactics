<script>
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "sveltestrap/src/";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  //   export let segment;
  import maps from "../routes/maps/names.js";
</script>

<style>

</style>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Tarkov Tactics</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="gear">Gear</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="items">Items</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="loadout">Loadout Builder</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/BenDaSpur/TarkovTactics">
          GitHub
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>Maps</DropdownToggle>
        <DropdownMenu right>
          {#each maps as map}
            <DropdownItem class="maps-link" href="/maps/{map.name}">
              {map.name}
            </DropdownItem>
          {/each}
          <DropdownItem class="maps-link" href="/maps">All Maps</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Collapse>
</Navbar>
