export const calculateScore = (throwNum, count) => {
    // frame 1
    if(throwNum == 1 && count != undefined) {
        switch(count) {
          case 10:
            document.getElementById("frame1throw1").innerHTML = 'X';
            document.getElementById("frame1score").innerHTML = 10;
            throwNum++;
            break;
          case 0:
            document.getElementById("frame1throw1").innerHTML = 0;
            break;
          default:
            document.getElementById("frame1throw1").innerHTML = count;
        }
    }
    else if(throwNum == 2 && count != undefined) {
        switch(count) {
          case 0:
            document.getElementById("frame1throw2").innerHTML = 0;
            break;
          default:
            document.getElementById("frame1throw2").innerHTML = count;
        }
        document.getElementById("frame1score").innerHTML = Number(document.getElementById("frame1throw1").innerHTML) + Number(document.getElementById("frame1throw2").innerHTML);
    }
    // frame 2
    else if(throwNum == 3 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame2throw1").innerHTML = 'X';
          document.getElementById("frame2score").innerHTML = 30;
          throwNum++;
          break;
        case 0:
          document.getElementById("frame2throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame2throw1").innerHTML = count;
      }
    }
    else if(throwNum == 4 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame2throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame2throw2").innerHTML = count;
      }
      if(document.getElementById("frame1throw1").innerHTML == 'X') {
        document.getElementById("frame2score").innerHTML = (2*(Number(document.getElementById("frame2throw1").innerHTML) + Number(document.getElementById("frame2throw2").innerHTML))) + 10;
      }
      else {
        document.getElementById("frame2score").innerHTML = Number(document.getElementById("frame2throw1").innerHTML) + Number(document.getElementById("frame2throw2").innerHTML) + Number(document.getElementById("frame1score").innerHTML);
      }
    }
    // frame 3
    else if(throwNum == 5 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame3throw1").innerHTML = 'X';
          if(document.getElementById("frame2throw1").innerHTML == 'X') {
              document.getElementById("frame3score").innerHTML = 60;
          }
          else {
            document.getElementById("frame3score").innerHTML = Number(document.getElementById("frame2score").innerHTML) + 10;
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame3throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame3throw1").innerHTML = count;
      }
    }
    else if(throwNum == 6 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame3throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame3throw2").innerHTML = count;
      }
      if(document.getElementById("frame2throw1").innerHTML == 'X') {
          if(document.getElementById("frame1throw1").innerHTML == 'X') {
            document.getElementById("frame3score").innerHTML = (2*(Number(document.getElementById("frame3throw1").innerHTML) + Number(document.getElementById("frame3throw2").innerHTML))) + 30;
          }
          else {
            document.getElementById("frame3score").innerHTML = (2*(Number(document.getElementById("frame3throw1").innerHTML) + Number(document.getElementById("frame3throw2").innerHTML))) + 10 + Number(document.getElementById("frame2score").innerHTML);
          }
      }
      else {
        document.getElementById("frame3score").innerHTML = Number(document.getElementById("frame3throw1").innerHTML) + Number(document.getElementById("frame3throw2").innerHTML) + Number(document.getElementById("frame2score").innerHTML);
      }    
    }
    // frame 4
    else if(throwNum == 7 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame4throw1").innerHTML = 'X';
          if(document.getElementById("frame3throw1").innerHTML == 'X') {
              if(document.getElementById("frame2throw1").innerHTML == 'X') {
                if(document.getElementById("frame2throw1").innerHTML == 'X') {
                    document.getElementById("frame4score").innerHTML = 90;
                }
                else {
                    document.getElementById("frame4score").innerHTML = Number(document.getElementById("frame3score").innerHTML) + 60;
                }
              }
              else {
                document.getElementById("frame4score").innerHTML = Number(document.getElementById("frame3score").innerHTML) + 30;
              }
          }
          else {
            document.getElementById("frame4score").innerHTML = Number(document.getElementById("frame3score").innerHTML) + 10;
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame4throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame4throw1").innerHTML = count;
      }
    }
    else if(throwNum == 8 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame4throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame4throw2").innerHTML = count;
      }
      if(document.getElementById("frame3throw1").innerHTML == 'X') {
        if(document.getElementById("frame2throw1").innerHTML == 'X') {
            if(document.getElementById("frame1throw1").innerHTML == 'X') {
                document.getElementById("frame4score").innerHTML = (2*(Number(document.getElementById("frame4throw1").innerHTML) + Number(document.getElementById("frame4throw2").innerHTML))) + 60;
            }
            else {
                document.getElementById("frame4score").innerHTML = (2*(Number(document.getElementById("frame4throw1").innerHTML) + Number(document.getElementById("frame4throw2").innerHTML))) + 30;
            }
        }
        else {
          document.getElementById("frame4score").innerHTML = (2*(Number(document.getElementById("frame4throw1").innerHTML) + Number(document.getElementById("frame4throw2").innerHTML))) + Number(document.getElementById("frame3score").innerHTML);
        }
      }
      else {
        document.getElementById("frame4score").innerHTML = Number(document.getElementById("frame4throw1").innerHTML) + Number(document.getElementById("frame4throw2").innerHTML) + Number(document.getElementById("frame3score").innerHTML);
      }
    }
    // frame 5
    else if(throwNum == 9 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame5throw1").innerHTML = 'X';
          if(document.getElementById("frame4throw1").innerHTML == 'X') {
            if(document.getElementById("frame3throw1").innerHTML == 'X') {
              if(document.getElementById("frame2throw1").innerHTML == 'X') {
                if(document.getElementById("frame1throw1").innerHTML == 'X') {
                    document.getElementById("frame5score").innerHTML = 120;
                }
                else {
                    document.getElementById("frame5score").innerHTML = Number(document.getElementById("frame4score").innerHTML) + 90;
                }
              }
              else {
                document.getElementById("frame5score").innerHTML = Number(document.getElementById("frame4score").innerHTML) + 60;
              }
            }
            else {
                document.getElementById("frame5score").innerHTML = Number(document.getElementById("frame4score").innerHTML) + 30;
            }
          }
          else {
            document.getElementById("frame5score").innerHTML = Number(document.getElementById("frame4score").innerHTML) + 10;          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame5throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame5throw1").innerHTML = count;
      }
    }
    else if(throwNum == 10 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame5throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame5throw2").innerHTML = count;
      }
      if(document.getElementById("frame4throw1").innerHTML == 'X') {
        if(document.getElementById("frame3throw1").innerHTML == 'X') {
            if(document.getElementById("frame2throw1").innerHTML == 'X') {
                if(document.getElementById("frame1throw1").innerHTML == 'X') {
                    document.getElementById("frame5score").innerHTML = (2*(Number(document.getElementById("frame5throw1").innerHTML) + Number(document.getElementById("frame5throw2").innerHTML))) + 90;
                }
                else {
                    document.getElementById("frame5score").innerHTML = (2*(Number(document.getElementById("frame5throw1").innerHTML) + Number(document.getElementById("frame5throw2").innerHTML))) + 60;
                }
            }
            else {
                document.getElementById("frame5score").innerHTML = (2*(Number(document.getElementById("frame5throw1").innerHTML) + Number(document.getElementById("frame5throw2").innerHTML))) + 30;
            }
        }
        else {
          document.getElementById("frame5score").innerHTML = (2*(Number(document.getElementById("frame5throw1").innerHTML) + Number(document.getElementById("frame5throw2").innerHTML))) + Number(document.getElementById("frame4score").innerHTML);
        }
      }
      else {
        document.getElementById("frame5score").innerHTML = Number(document.getElementById("frame5throw1").innerHTML) + Number(document.getElementById("frame5throw2").innerHTML) + Number(document.getElementById("frame4score").innerHTML);
      }
    }
    // frame 6
    else if(throwNum == 11 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame6throw1").innerHTML = 'X';
          if(document.getElementById("frame5throw1").innerHTML == 'X') {
            if(document.getElementById("frame4throw1").innerHTML == 'X') {
              if(document.getElementById("frame3throw1").innerHTML == 'X') {
                if(document.getElementById("frame2throw1").innerHTML == 'X') {
                    if(document.getElementById("frame1throw1").innerHTML == 'X') {
                        document.getElementById("frame6score").innerHTML = 150;
                    }
                    else {
                        document.getElementById("frame6score").innerHTML =  + 120;
                    }
                }
                else {
                    document.getElementById("frame6score").innerHTML = Number(document.getElementById("frame5score").innerHTML) + 90;
                }
              }
              else {
                document.getElementById("frame6score").innerHTML = Number(document.getElementById("frame5score").innerHTML) + 60;
              }
            }
            else {
                document.getElementById("frame6score").innerHTML = Number(document.getElementById("frame5score").innerHTML) + 30;
            }
          }
          else {
            document.getElementById("frame6score").innerHTML = Number(document.getElementById("frame5score").innerHTML) + 10;
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame6throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame6throw1").innerHTML = count;
      }
    }
    else if(throwNum == 12 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame6throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame6throw2").innerHTML = count;
      }
      if(document.getElementById("frame5throw1").innerHTML == 'X') {
        if(document.getElementById("frame4throw1").innerHTML == 'X') {
            if(document.getElementById("frame3throw1").innerHTML == 'X') {
                if(document.getElementById("frame2throw1").innerHTML == 'X') {
                    if(document.getElementById("frame1throw1").innerHTML == 'X') {
                        document.getElementById("frame6score").innerHTML = (2*(Number(document.getElementById("frame6throw1").innerHTML) + Number(document.getElementById("frame6throw2").innerHTML))) + 120;
                    }
                    else {
                        document.getElementById("frame6score").innerHTML = (2*(Number(document.getElementById("frame6throw1").innerHTML) + Number(document.getElementById("frame6throw2").innerHTML))) + 120;
                    }
                }
                else {
                    document.getElementById("frame6score").innerHTML = (2*(Number(document.getElementById("frame6throw1").innerHTML) + Number(document.getElementById("frame6throw2").innerHTML))) + 120;
                }
            }
            else {
                document.getElementById("frame6score").innerHTML = (2*(Number(document.getElementById("frame6throw1").innerHTML) + Number(document.getElementById("frame6throw2").innerHTML))) + 120;
            }
        }
        else {
          document.getElementById("frame6score").innerHTML = (2*(Number(document.getElementById("frame6throw1").innerHTML) + Number(document.getElementById("frame6throw2").innerHTML))) + Number(document.getElementById("frame5score").innerHTML);
        }
      }
      else {
        document.getElementById("frame6score").innerHTML = Number(document.getElementById("frame6throw1").innerHTML) + Number(document.getElementById("frame6throw2").innerHTML) + Number(document.getElementById("frame5score").innerHTML);
      }
    }
    // frame 7
    else if(throwNum == 13 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame7throw1").innerHTML = 'X';
          if(document.getElementById("frame6throw1").innerHTML == 'X') {
            if(document.getElementById("frame5throw1").innerHTML == 'X') {
              if(document.getElementById("frame4throw1").innerHTML == 'X') {
                if(document.getElementById("frame3throw1").innerHTML == 'X') {
                    if(document.getElementById("frame2throw1").innerHTML == 'X') {
                        if(document.getElementById("frame1throw1").innerHTML == 'X') {
                            document.getElementById("frame7score").innerHTML = 180;
                        }
                        else {
                            document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame6score").innerHTML) + 150;
                        }
                    }
                    else {
                        document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame6score").innerHTML) + 120;
                    }
                }
                else {
                    document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame6score").innerHTML) + 90;
                }
              }
              else {
                document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame6score").innerHTML) + 60;
              }
            }
            else {
                document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame6score").innerHTML) + 30;
            }
          }
          else {
            document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame6score").innerHTML) + 10;
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame7throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame7throw1").innerHTML = count;
      }
    }
    else if(throwNum == 14 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame7throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame7throw2").innerHTML = count;
      }
      if(document.getElementById("frame6throw1").innerHTML == 'X') {
        if(document.getElementById("frame5throw1").innerHTML == 'X') {
            if(document.getElementById("frame4throw1").innerHTML == 'X') {
                if(document.getElementById("frame3throw1").innerHTML == 'X') {
                    if(document.getElementById("frame2throw1").innerHTML == 'X') {
                        if(document.getElementById("frame1throw1").innerHTML == 'X') {
                            document.getElementById("frame7score").innerHTML = (2*(Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML))) + 150;
                        }
                        else {
                            document.getElementById("frame7score").innerHTML = (2*(Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML))) + 120;
                        }
                    }
                    else {
                        document.getElementById("frame7score").innerHTML = (2*(Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML))) + 90;
                    }
                }
                else {
                    document.getElementById("frame7score").innerHTML = (2*(Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML))) + 60;
                }
            }
            else {
                document.getElementById("frame7score").innerHTML = (2*(Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML))) + 30;
            }
        }
        else {
          document.getElementById("frame7score").innerHTML = (2*(Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML))) + Number(document.getElementById("frame6score").innerHTML);
        }
      }
      else {
        document.getElementById("frame7score").innerHTML = Number(document.getElementById("frame7throw1").innerHTML) + Number(document.getElementById("frame7throw2").innerHTML) + Number(document.getElementById("frame6score").innerHTML);
      }    
    }
    // frame 8
    else if(throwNum == 15 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame8throw1").innerHTML = 'X';
          if(document.getElementById("frame7throw1").innerHTML == 'X') {
            if(document.getElementById("frame6throw1").innerHTML == 'X') {
              if(document.getElementById("frame5throw1").innerHTML == 'X') {
                if(document.getElementById("frame4throw1").innerHTML == 'X') {
                    if(document.getElementById("frame3throw1").innerHTML == 'X') {
                        if(document.getElementById("frame2throw1").innerHTML == 'X') {
                            if(document.getElementById("frame1throw1").innerHTML == 'X') {
                                document.getElementById("frame8score").innerHTML = 210;
                            }
                            else {
                                document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 180;
                            }
                        }
                        else {
                            document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 150;
                        }
                    }
                    else {
                        document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 120;
                    }
                }
                else {
                    document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 90;
                }
              }
              else {
                document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 60;
              }
            }
            else {
                document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 30;
            }
          }
          else {
            document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame7score").innerHTML) + 10;
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame8throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame8throw1").innerHTML = count;
      }
    }
    else if(throwNum == 16 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame8throw2").innerHTML = 0;
          document.getElementById("frame2score").innerHTML = 240;
          break;
        default:
          document.getElementById("frame8throw2").innerHTML = count;
      }
      if(document.getElementById("frame7throw1").innerHTML == 'X') {
        if(document.getElementById("frame6throw1").innerHTML == 'X') {
            if(document.getElementById("frame5throw1").innerHTML == 'X') {
                if(document.getElementById("frame4throw1").innerHTML == 'X') {
                    if(document.getElementById("frame3throw1").innerHTML == 'X') {
                        if(document.getElementById("frame2throw1").innerHTML == 'X') {
                            if(document.getElementById("frame1throw1").innerHTML == 'X') {
                                document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + 180;
                            }
                            else {
                                document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + 30;
                            }
                        }
                        else {
                            document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + 30;
                        }
                    }
                    else {
                        document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + 30;
                    }
                }
                else {
                    document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + 30;
                }
            }
            else {
                document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + 30;
            }
        }
        else {
          document.getElementById("frame8score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + Number(document.getElementById("frame7score").innerHTML);
        }
      }
      else {
        document.getElementById("frame8score").innerHTML = Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML) + Number(document.getElementById("frame7score").innerHTML);
      }    
    }
    // frame 9
    else if(throwNum == 17 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame9throw1").innerHTML = 'X';
          if(document.getElementById("frame8throw1").innerHTML == 'X') {
            if(document.getElementById("frame7throw1").innerHTML == 'X') {
              if(document.getElementById("frame6throw1").innerHTML == 'X') {
                if(document.getElementById("frame5throw1").innerHTML == 'X') {
                    if(document.getElementById("frame4throw1").innerHTML == 'X') {
                        if(document.getElementById("frame3throw1").innerHTML == 'X') {
                            if(document.getElementById("frame2throw1").innerHTML == 'X') {
                                if(document.getElementById("frame1throw1").innerHTML == 'X') {
                                    document.getElementById("frame9score").innerHTML = 240;
                                }
                                else {
                                    document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 210;
                                }
                            }
                            else {
                                document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 180;
                            }
                        }
                        else {
                            document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 150;
                        }
                    }
                    else {
                        document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 120;
                    }
                }
                else {
                    document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 90;
                }
              }
              else {
                document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 60;
              }
            }
            else {
                document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 30;
            }
          }
          else {
            document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame8score").innerHTML) + 10;
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame9throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame9throw1").innerHTML = count;
      }
    }
    else if(throwNum == 18 && count != undefined) {
      switch(count) {
        case 0:
          document.getElementById("frame9throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame9throw2").innerHTML = count;
      }
      if(document.getElementById("frame8throw1").innerHTML == 'X') {
        if(document.getElementById("frame7throw1").innerHTML == 'X') {
            if(document.getElementById("frame6throw1").innerHTML == 'X') {
                if(document.getElementById("frame5throw1").innerHTML == 'X') {
                    if(document.getElementById("frame4throw1").innerHTML == 'X') {
                        if(document.getElementById("frame3throw1").innerHTML == 'X') {
                            if(document.getElementById("frame2throw1").innerHTML == 'X') {
                                if(document.getElementById("frame1throw1").innerHTML == 'X') {
                                    document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 210;
                                }
                                else {
                                    document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 180;
                                }
                            }
                            else {
                                document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 150;
                            }
                        }
                        else {
                            document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 120;
                        }
                    }
                    else {
                        document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 90;
                    }
                }
                else {
                    document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 60;
                }
            }
            else {
                document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 30;
            }
        }
        else {
          document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + Number(document.getElementById("frame8score").innerHTML);
        }
      }
      else {
        document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML) + Number(document.getElementById("frame8score").innerHTML);
      }    
    }
    // frame 10 - final frame
    else if(throwNum == 19 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame10throw1").innerHTML = 'X';
          if(document.getElementById("frame9throw1").innerHTML == 'X') {
            if(document.getElementById("frame8throw1").innerHTML == 'X') {
              if(document.getElementById("frame7throw1").innerHTML == 'X') {
                if(document.getElementById("frame6throw1").innerHTML == 'X') {
                    if(document.getElementById("frame5throw1").innerHTML == 'X') {
                        if(document.getElementById("frame4throw1").innerHTML == 'X') {
                            if(document.getElementById("frame3throw1").innerHTML == 'X') {
                                if(document.getElementById("frame2throw1").innerHTML == 'X') {
                                    if(document.getElementById("frame1throw1").innerHTML == 'X') {
                                        document.getElementById("frame10score").innerHTML = 270;
                                    }
                                    else {
                                        document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 240;
                                    }
                                }
                                else {
                                    document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 210;
                                }
                            }
                            else {
                                document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 180;
                            }
                        }
                        else {
                            document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 150;
                        }
                    }
                    else {
                        document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 120;
                    }
                }
                else {
                    document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 90;
                }
              }
              else {
                document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 60;
              }
            }
            else {
                document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 30;
            }
          }
          else {
            document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame9score").innerHTML) + 10;
          }
          break;
        case 0:
          document.getElementById("frame10throw1").innerHTML = 0;
          break;
        default:
          document.getElementById("frame10throw1").innerHTML = count;
      }
    }
    else if(throwNum == 20 && count != undefined) {
      switch(count) {
        case 10:
          document.getElementById("frame10throw2").innerHTML = 'X';
          if(document.getElementById("frame10throw1").innerHTML == 'X') {
            if(document.getElementById("frame9throw1").innerHTML == 'X') {
              if(document.getElementById("frame8throw1").innerHTML == 'X') {
                if(document.getElementById("frame7throw1").innerHTML == 'X') {
                    if(document.getElementById("frame6throw1").innerHTML == 'X') {
                        if(document.getElementById("frame5throw1").innerHTML == 'X') {
                            if(document.getElementById("frame4throw1").innerHTML == 'X') {
                                if(document.getElementById("frame3throw1").innerHTML == 'X') {
                                    if(document.getElementById("frame2throw1").innerHTML == 'X') {
                                        if(document.getElementById("frame1throw1").innerHTML == 'X') {
                                            document.getElementById("frame10score").innerHTML = 290;
                                        }
                                        else {
                                            document.getElementById("frame10score").innerHTML = (2*(Number(document.getElementById("frame10throw1").innerHTML) + Number(document.getElementById("frame10throw2").innerHTML))) + 180;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
              }
            }
          }
          throwNum++;
          break;
        case 0:
          document.getElementById("frame10throw2").innerHTML = 0;
          break;
        default:
          document.getElementById("frame10throw2").innerHTML = count;
      }
      if(document.getElementById("frame9throw1").innerHTML == 'X') {
        if(document.getElementById("frame8throw1").innerHTML == 'X') {
            if(document.getElementById("frame7throw1").innerHTML == 'X') {
                if(document.getElementById("frame6throw1").innerHTML == 'X') {
                    if(document.getElementById("frame5throw1").innerHTML == 'X') {
                        if(document.getElementById("frame4throw1").innerHTML == 'X') {
                            if(document.getElementById("frame3throw1").innerHTML == 'X') {
                                if(document.getElementById("frame2throw1").innerHTML == 'X') {
                                    if(document.getElementById("frame2throw1").innerHTML == 'X') {
                                        document.getElementById("frame10score").innerHTML = (2*(Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML))) + 240;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
          document.getElementById("frame9score").innerHTML = (2*(Number(document.getElementById("frame8throw1").innerHTML) + Number(document.getElementById("frame8throw2").innerHTML))) + Number(document.getElementById("frame9score").innerHTML);
        }
      }
      else {
        document.getElementById("frame9score").innerHTML = Number(document.getElementById("frame9throw1").innerHTML) + Number(document.getElementById("frame9throw2").innerHTML) + Number(document.getElementById("frame8score").innerHTML);
      }
      alert('Game over! Your score is: ' + document.getElementById("frame10score").innerHTML);    
    }
    else if(throwNum == 21 && count != undefined) {
        switch(count) {
            case 10:
                document.getElementById("frame10score").innerHTML = 300;
                break;
            case 0:
                document.getElementById("frame10throw3").innerHTML = 0;
                document.getElementById("frame10score").innerHTML = document.getElementById("frame10score").innerHTML;
                break;
            default:
                document.getElementById("frame10throw3").innerHTML = count;
                document.getElementById("frame10score").innerHTML = Number(document.getElementById("frame10score").innerHTML) + Number(document.getElementById("frame10throw3").innerHTML);
        }
        alert('Game over! Your score is: ' + document.getElementById("frame10score").innerHTML);
    }
    return throwNum;
};