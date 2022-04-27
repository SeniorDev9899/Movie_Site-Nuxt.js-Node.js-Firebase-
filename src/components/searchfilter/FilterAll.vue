<template>
  <div style="width: 260px">
    <div
      class="shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white"
    >
      <div class="flex">
        <div class="text-xl p-2 flex" style="width: 100%">
          Sort
          <div
            v-b-toggle.collapse-1
            variant="primary"
            style="
              overflow-anchor: none;
              background: none;
              color: black;
              border: none;
              margin-left: 75%;
              margin-top: -4px;
              outline: none;
              font-size: 17px;
            "
          >
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              class="dark:text-white"
            />
          </div>
        </div>
      </div>
      <b-collapse id="collapse-1" visible class="mt-2">
        <p class="text-md px-2">Sort Results By</p>
        <b-form-select
          v-model="selected"
          class="mb-3 mx-2 text-sm dark:bg-custom-gray dark:text-white"
          style="width: 94%; border-radius: 6px"
        >
          <b-form-select-option :value="null" class="">
            Awards Ascending
          </b-form-select-option>
          <b-form-select-option value="a">
            Release Date Descending
          </b-form-select-option>
          <b-form-select-option value="b">
            Release Ascending
          </b-form-select-option>
          <b-form-select-option :value="null">
            Title (A-Z)
          </b-form-select-option>
          <b-form-select-option value="a"> Title (Z-A) </b-form-select-option>
        </b-form-select>
      </b-collapse>
    </div>
    <div
      class="shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white my-3"
    >
      <div class="DemoBS2 pb-2">
        <!-- toggle part here -->
        <button
          type="button"
          class="mx-2 flex rounded-full"
          style="outline: none"
          id="toggle-btn"
          data-toggle="collapse"
          data-target="#toggle-filters"
        >
          <p class="text-xl mr-4">Filters</p>
          <font-awesome-icon
            :icon="['fas', 'sync-alt']"
            class="ml-2"
            style="font-size: 9px; margin-top: 14px; margin-right: 3px"
          />
          <p class="text-xs mt-2">clear filter</p>
          <div
            v-b-toggle.collapse-3
            class="m-1"
            style="
              overflow-anchor: none;
              background: none;
              border: none;
              padding: 0rem;
              padding-left: 62px;
              outline: none;
            "
          >
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              class="text-black dark:text-white"
            />
            <!-- <font-awesome-icon
              :icon="['fas', 'caret-down']"
              class="mt-1 ml-4 text-custom-gray dark:text-white"
              style="margin-left: 0rem !important"
            /> -->
          </div>
        </button>
        <div>
          <b-collapse id="collapse-3">
            <b-card>
              <div class="p-2 m-2">
                <p
                  class="text-xs mb-2"
                  style="padding-top: 7px; font-weight: bold"
                >
                  Show Me
                </p>
                <label class="checkbox-container"
                  >Everything
                  <input type="checkbox" checked="checked" />
                  <span class="checkmark"></span>
                </label>
                <label class="checkbox-container"
                  >I Haven`t Seen
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="checkbox-container"
                  >I Have Seen
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </b-card>

            <div id="toggle-filters" class="collapse show p-2 m-2">
              <div class="flex">
                <p class="text-xs" style="padding-top: 7px; font-weight: bold">
                  Awards
                </p>
                <div
                  v-b-toggle.collapse-Awards
                  class="m-1"
                  style="
                    overflow-anchor: none;
                    background: none;
                    padding: 0;
                    border: none;
                    margin-left: 75% !important;
                    margin-top: 2% !important;
                    outline: none;
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-down']"
                    class="text-black dark:text-white"
                  />
                </div>
              </div>
              <b-collapse visible id="collapse-Awards">
                <b-card>
                  <div class="mytree text-xs">
                    <!-- first tree option -->
                    <div>
                      <div
                        v-b-toggle.collapse-21
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />
                          Academy Awards
                        </p>
                      </div>
                      <b-collapse id="collapse-21" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-21-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-21-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-22-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-22-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div>
                      <div
                        v-b-toggle.collapse-31
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />
                          Emmy Awards
                        </p>
                      </div>
                      <b-collapse id="collapse-31" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-31-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-31-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-32-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-32-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div>
                      <div
                        v-b-toggle.collapse-41
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />
                          BAFTA Awards
                        </p>
                      </div>
                      <b-collapse id="collapse-41" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-41-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-41-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-42-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-42-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div>
                      <div
                        v-b-toggle.collapse-51
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />
                          Cannes Awards
                        </p>
                      </div>
                      <b-collapse id="collapse-51" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-51-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-51-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-52-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-52-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div>
                      <div
                        v-b-toggle.collapse-61
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />

                          <span>Berlin International Film Awards</span>
                        </p>
                      </div>
                      <b-collapse id="collapse-61" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-61-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-61-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-62-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-62-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div>
                      <div
                        v-b-toggle.collapse-71
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />

                          <span>Golden Globe Awards</span>
                        </p>
                      </div>
                      <b-collapse id="collapse-71" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-71-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-71-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-72-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-72-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                    <div>
                      <div
                        v-b-toggle.collapse-81
                        variant="primary"
                        style="
                          overflow-anchor: none;
                          background: none;
                          color: black;
                          border: none;
                          font-size: 12px;
                          padding: 0rem;
                          width: 100%;
                        "
                      >
                        <p class="flex dark:text-white">
                          <font-awesome-icon
                            :icon="['fas', 'chevron-down']"
                            class="text-black dark:text-white mt-1 mr-2"
                          />

                          <span>Golden Globe Awards</span>
                        </p>
                      </div>
                      <b-collapse id="collapse-81" class="mt-2">
                        <b-card>
                          <div
                            v-b-toggle.collapse-81-inner
                            size="sm"
                            style="
                              overflow-anchor: none;
                              background: none;
                              color: black;
                              border: none;
                              font-size: 12px;
                              padding: 0rem;
                            "
                          >
                            <div class="flex">
                              <font-awesome-icon
                                :icon="['fas', 'chevron-down']"
                                class="text-black dark:text-white mt-1 mr-2"
                              />
                              <p class="dark:text-white">Best Picture</p>
                            </div>
                          </div>
                          <b-collapse
                            id="collapse-81-inner"
                            class="mt-2 text-black dark:text-white"
                          >
                            <b-card>
                              <div
                                v-b-toggle.collapse-82-inner
                                size="sm"
                                style="
                                  overflow-anchor: none;
                                  background: none;
                                  color: black;
                                  border: none;
                                  font-size: 12px;
                                  padding: 0rem;
                                "
                              >
                                <div class="flex">
                                  <font-awesome-icon
                                    :icon="['fas', 'chevron-down']"
                                    class="text-black dark:text-white mt-1 mr-2"
                                  />
                                  <p class="dark:text-white">Best Picture</p>
                                </div>
                              </div>
                              <b-collapse
                                id="collapse-82-inner"
                                class="mt-2 text-black dark:text-white"
                              >
                                <p style="margin-left: 20px">SecondCaractory</p>
                              </b-collapse>
                            </b-card>
                          </b-collapse>
                        </b-card>
                      </b-collapse>
                    </div>
                  </div>
                  <p class="text-xs">
                    <label class="checkbox-container mt-3"
                      >All
                      <input type="checkbox" checked="checked" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container"
                      >Winner
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container mb-3"
                      >Nominee
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </p>
                </b-card>
              </b-collapse>
              <div class="flex">
                <div class="text-xs flex" style="font-weight: bold">
                  <p>Awards Year</p>
                </div>
                <div
                  v-b-toggle.collapse-year
                  style="
                    background: none;
                    border: none;
                    margin-left: 57%;
                    overflow-anchor: none;
                    outline: none;
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-down']"
                    class="text-black dark:text-white mt-1 mr-2"
                    style="margin-left: 52%"
                  />
                </div>
              </div>

              
              <b-collapse visible id="collapse-year" class="mt-2">
                <b-card>
                  <div>
                    <vue-slider 
                      class="text-black dark:text-white"
                      v-model="value"
                     :min="1927"
                     :max="2021" 
                     :tooltip="'always'"
                     :process-style="{ backgroundColor: '#675f5f' }"
                     :tooltip-style="{ backgroundColor: '#fff', color: '#252525', borderColor: '#252525' }"
                     :enable-cross="false">
                     <template v-slot:dot="{ focus }">
                      <div :class="['custom-dot', { focus }]"></div>
                    </template>
                    </vue-slider>
                  </div>
                </b-card>
              </b-collapse>

              <div>
                <div class="flex">
                  <p class="text-xs mt-3 genre">By Genre</p>
                  <div
                    v-b-toggle.collapse-Genre
                    class=""
                    style="
                      overflow-anchor: none;
                      background: none;
                      color: black;
                      border: none;
                      padding-top: 11px;
                      outline: none;
                    "
                  >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-down']"
                      class="text-black dark:text-white mt-1 mr-2"
                      style="margin-left: 52%"
                    />
                  </div>
                </div>
                <b-collapse visible id="collapse-Genre">
                  <b-card>
                    <div class="">
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Action
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Adventure
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Animation
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Comedy
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Crime
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Documentary
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Drama
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Family
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Fantasy
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        History
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Horror
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Music
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Mystery
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Romance
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Science Fiction
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Thriller
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        TV Movie
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        War
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1"
                      >
                        Western
                      </button>
                    </div>
                  </b-card>
                </b-collapse>
              </div>
              <div class="flex">
                <p class="text-xs mt-3 known">By Known For</p>
                <div
                  v-b-toggle.collapse-byKnown
                  style="
                    overflow-anchor: none;
                    background: none;
                    color: black;
                    border: none;
                    padding-top: 11px;
                    outline: none;
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-down']"
                    class="text-black dark:text-white mt-1 mr-2"
                    style="margin-left: 52%"
                  />
                </div>
              </div>
              <b-collapse visible id="collapse-byKnown">
                <b-card
                  ><label class="checkbox-container"
                    >Acting
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Directing
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Visual Effects
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Production
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Camera
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Art
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Lighting
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Costume & Make-Up
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Sound
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Editing
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Crew
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Writing
                    <input type="checkbox" />
                    <span class="checkmark"></span> </label
                ></b-card>
              </b-collapse>

              <div class="text-xs">
                <div class="flex">
                  <p
                    class="mt-4 mb-2 dark:text-white font-bold"
                    style="margin-right: 125px"
                  >
                    By Company
                  </p>
                  <div
                    v-b-toggle.collapse-Company
                    class="m-1"
                    style="
                      background: none;
                      border: none;
                      outline: none;
                      font-size: 15px;
                      padding-top: 12px;
                    "
                  >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-down']"
                      class="text-black dark:text-white mt-1 mr-2"
                      style="margin-left: 52%"
                    />
                  </div>
                </div>
                <b-collapse visible id="collapse-Company">
                  <b-card>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      Fox Film
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      Metro-Goldwyn-Mayer
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      Paramount Pictures
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      RKO Radio Pictures
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      United Artists
                    </div>
                  </b-card>
                </b-collapse>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
    <div
      class="shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white my-3 px-2"
    >
      <div class="flex">
        <p class="text-xl mr-4" style="margin-right: 29% !important">
          Where to Watch
        </p>
        <div v-b-toggle.collapse-where class="" style="outline: none">
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black dark:text-white mt-1 mr-2"
          />
        </div>
      </div>

      <b-collapse id="collapse-where">
        <b-card>
          <p class="text-xs">Country</p>
          <form action="/">
            <select
              name="cars"
              id="cars"
              class="text-xs w-full rounded-lg dark:text-black"
              style="outline: none; border: solid 1px"
            >
              <option value="volvo">
                <span> Germany</span>
              </option>
              <option value="saab">Canada</option>
              <option value="opel">United State</option>
              <option value="audi">France</option>
              <option value="audi">England</option>
            </select>
          </form>
          <div class="flex flex-wrap overflow-hidden">
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle.png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (0).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (1).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (2).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (3).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (4).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (5).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (6).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (7).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (8).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (9).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (10).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (11).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (12).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (13).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (14).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (15).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (16).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (17).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (18).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (19).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (20).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (21).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (22).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (23).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (24).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (25).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'

// import theme
import 'vue-slider-component/theme/default.css'

export default {
    components: {
      VueSlider
    },
    data() {
      return {
        value: [1970, 2001],
        marks: [1927, 2021]
      }
    }
  };
</script>
<style scoped>
@import "~/assets/css/styles.css";
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
.card {
  border: none;
  background: none;
}
.btn-secondary:hover {
  color: black;
}
.borderLine {
  border: 1px solid;
}
.slidecontainer {
  width: 100%;
}

.sliders {
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  outline: none;
  transition: opacity 0.2s;
}

.sliders:hover {
  opacity: 1;
}

.sliders::-webkit-sliders-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 10rem;
  width: 12px;
  height: 12px;
  background: black;
  cursor: pointer;
}
div.mytree div {
  padding-left: 5px;
}

div.mytree div.parent div {
  display: none;
  cursor: default;
}

div.mytree div.parent {
  cursor: pointer;
}
/* .sliders::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
} */
.germany {
  background-image: url("https://cdn4.iconfinder.com/data/icons/world-flags-12/512/Untitled-2-10-128.png");
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background-size: 100%;
  margin-right: 5px;
  background-repeat: no-repeat;
}
.genre {
  font-weight: bold;
  margin-right: 66% !important;
}
.known {
  outline: none;
  margin-right: 54%;
  font-weight: bold;
}
.vue-slider-mark-label {
  margin-top: -30px!important;
}
.vue-slider{
  padding: 30px 0px 15px!important;
  width: auto!important;
  height: 3px!important;
}
.custom-dot {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #252525;
    transition: all .3s;
  }
  .custom-dot:hover {
    transform: rotateZ(45deg);
  }
  .custom-dot.focus {
    border-radius: 50%;
  }
</style>